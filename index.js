const puzzlePath1 = 'aW5kZXg=';
const puzzlePath2 = 'cHV6emxlMg==';
const puzzlePath3 = 'cHV6emxlMw==';

function puzzle1(value) {
    if(value === atob('SSBhbSBhIG5pbmph')) {
        return location.assign('./'+atob(puzzlePath2)+'.html')
    }
}

function puzzle2(value) {
    if(value === atob('RmluYWxseQ==')) {
        return location.assign('./'+atob(puzzlePath3)+'.html')
    }
}

function puzzle3(value) {
    if(value.includes('<script>') && value.includes('alert') && value.includes('</script>')) {
        alert("Seems that you fooled the Architect... You're the best Ninja i've seen... CTF done !")
    }
}