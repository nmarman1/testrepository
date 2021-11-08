const{app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:600
    })

    win.loadFile('main.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function() {
    app.quit()
})