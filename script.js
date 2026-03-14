document.getElementById("convertBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    
    // Mapping von normalen Buchstaben zu hochgestellten Buchstaben
    const smallCapsMap = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 
        'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 
        's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    };
    
    // Konvertieren des Texts
    const smallText = inputText.split('').map(char => {
        const lowerChar = char.toLowerCase();
        return smallCapsMap[lowerChar] || char; // Wenn der Buchstabe nicht in der Map ist, bleibt er gleich
    }).join('');
    
    // Ausgabe des konvertierten Texts
    document.getElementById("outputText").value = smallText;
});
