/* kalau eror bukan dari ku ga usah tanya" ektrak ulang aja dari awal tod 
 jangan lupa subscribe ga ada ruginya 
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01',//apikey lu
}

// Owner
global.owner = ['6285822347348','6285822347348','6285822347348']
global.ownernomer = '6285822347348'
global.premium = ['6285822347348']
global.ownername = 'ArullOfc'
global.botname = 'ArullBotzMD'
global.footer = 'ArullOfc'
global.email = 'sahrulwara62@gmail.com'
global.ig = 'https://instagram.com/sahrulwara_____'
global.region = 'indonesia'// bebas

// Keperluan buttons
global.myweb = 'https://instagram.com/sahrulwara_____'
global.sc = 'https://github.com/Arullwara/vraabot-MD'
global.grupowner ='https://chat.whatsapp.com/LDN0EeJfASs0lbUhJsOJu1'// GRUP LU 
// Wm
global.packname = 'ArullBotzMD'//BEBAS
global.author = 'ArullOfc'

// Thumb & Image random
global.thumb = fs.readFileSync('./image/kiki.jpg')// jangan di ubah nanti eror

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "15"
global.limitgame = "15"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
