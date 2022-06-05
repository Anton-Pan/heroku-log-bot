const {exec} = require("child_process");

const execLogs = () => {
    return new Promise((resolve, reject) => {
        exec("heroku logs -a sleepy-caverns-04464 -n 25", (error, stdout, stderr) => {
            if (stdout) {
                console.log(`stdout: ${stdout}`)
                resolve(stdout.split("\n").reverse())
                return;
            }

            if (error) {
                console.log(`error: ${error.message}`);
                reject(error.message)
                return;
            }

            if (stderr) {
                console.log(`stderr: ${stderr}`);
                reject(stderr)
                return;
            }
            ;
        })
    })
};

module.exports = {execLogs}