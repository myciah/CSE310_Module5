import * as fs from "fs/promises";
import * as path from "path";
import * as readline from "readline";

// section 1
// simple structure to store file info
class FileInfo {
    filePath: string;
    size: number;

    constructor(filePath: string, size: number) {
        this.filePath = filePath;
        this.size = size;
    }
}

// section 2
// this class scans folders and collects file info
class DirectoryScanner {

    files: FileInfo[] = [];

    // recursive function that walks through folders
    async scan(dir: string) {

        let items;

        try {
            items = await fs.readdir(dir);
        } catch (err) {
            console.log("Could not read directory:", dir);
            return;
        }

        for (const item of items) {

            const fullPath = path.join(dir, item);

            let stats;

            try {
                stats = await fs.stat(fullPath);
            } catch {
                console.log("Error reading:", fullPath);
                continue;
            }

            if (stats.isDirectory()) {

                // recursion happens here
                await this.scan(fullPath);

            } else {

                this.files.push(new FileInfo(fullPath, stats.size));

            }
        }
    }

    // section 3
    printFiles() {

        if (this.files.length === 0) {
            console.log("No files found.");
            return;
        }

        console.log("\nFiles discovered:\n");

        for (const file of this.files) {
            console.log(`${file.filePath} (${file.size} bytes)`);
        }

        console.log(`\nTotal files: ${this.files.length}`);
    }

    // section 4
    getLargestFile() {

        if (this.files.length === 0) {
            return null;
        }

        let largest = this.files[0];

        for (const file of this.files) {
            if (file.size > largest.size) {
                largest = file;
            }
        }

        return largest;
    }
}

//section 5
// CLI section
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

// section 6
async function main() {

    console.log("Directory Scanner (TypeScript)");
    console.log("-------------------------------");

    const folder = await ask("Enter a folder path to scan: ");

    const scanner = new DirectoryScanner();

    console.log("\nScanning... this might take a moment.\n");

    try {

        await scanner.scan(folder);

        scanner.printFiles();

        const largest = scanner.getLargestFile();

        if (largest) {
            console.log("\nLargest file:");
            console.log(`${largest.filePath} (${largest.size} bytes)`);
        }

    } catch (err) {

        console.log("Something went wrong while scanning.");

    }

    rl.close();
}

main();