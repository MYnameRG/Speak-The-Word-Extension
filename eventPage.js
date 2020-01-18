var menuItem = {
    "id": "speak",
    "title": "Speak It",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "speak" && clickData.selectionText)
    {
        //Speak out the Word
        chrome.tts.speak(clickData.selectionText, {'lang':'en-US','rate': 0.7});
    }
});
