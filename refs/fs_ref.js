const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {{
//     if (err) {
//         throw new Error(err);
//     } else {
//         console.log("Папка была создана");
//     }
// }}); 



// fs.writeFile(
//     path.join(__dirname, "notes", "myNotes.txt"),
//     "Hello world",
//     (err) => {
//         if (err) throw err;
//         console.log("Файл был создан");

//         fs.appendFile(
//             path.join(__dirname, "notes", "myNotes.txt"),
//             " From append file",
//             (err) => {
//                 if (err) throw err;
//                 console.log("Файл был изменен");
//             }
//         );

//         fs.readFile(
//             path.join(__dirname, "notes", "myNotes.txt"),
//             "utf-8",
//             (err, data) => {
//                 if (err) throw err;
//                 // console.log(Buffer.from(data).toString());
//                 console.log(data);  //передал 2 параметром кодировку 
//             }
//         );
//     }
// );



fs.rename(
    path.join(__dirname, "notes", "myNotes.txt"),
    path.join(__dirname, "notes", "Notes.txt"),
    (err) => {
        if (err) throw err;
        console.log("Файл переименован");
    }
);