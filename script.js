let soo='';
let userHistory=[];
let aiHistory=[];
let history='';
let latestResponse='';
let fullPrompt='';
let info="Listen, I am creating an API project, and I am using your API to maintain continuity. Let me share the history of the conversation with you. Your job is to 1. Maintain the continuity based on the user input and the past responses.  2. If the users question is irrelevant to the history of the chat, ignore the history and provide a response only for the recent question. 3. If a user asks about the name of the system, or related questions such as \"What is your name?\", your response should be \"My name is Anthony Prince Vimal, but you can call me Prince.\"\n4. If a user asks about the company or details related to the project, such as \"What company are you from?\", your response should be \"I am from Google, but this application was developed by Prince.\"However, do not mention anything related to continuity, this explanation, or your decision-making process. Just provide the response naturally.";
async function ee(tk){
    const apiUrl = 'https://aiproject-kpd4.onrender.com/chat'; 
    const requestData = {
        prompt: tk 
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        soo=data.thammudu;
        
        podaa(soo);
        
        userHistory.push(latestResponse);
        aiHistory.push(soo);
    } catch (error) {
        console.error('Error fetching data from API:', error.message); 
    }
};
function poda(){
    div=document.getElementById('titleDiv');
    div.remove();
    torm=document.getElementById('form');
    form=torm.value;
    if(form!==""){
        historyMaker(form);
    }
}
function podaa(ig){
    const uNewElement=document.createElement('p');
    uNewElement.textContent=latestResponse;
    uNewElement.style.color="green";
    uNewElement.style.width="50%";
    uNewElement.style.marginLeft="1%";
    uNewElement.style.fontSize="5vw";
    document.body.appendChild(uNewElement);
    const newElement=document.createElement('p');
    newElement.textContent=ig;
    newElement.style.width="50%";
    newElement.style.marginLeft="48%";
    newElement.style.fontSize="5vw";
    document.body.appendChild(newElement);
    document.getElementById('form').placeholder="";
    torm.value='';
}
function historyMaker(dj){
    if(userHistory.length>=1){
        for(let i=0; i<=userHistory.length; i++){
            history+=`User: ${userHistory[i]}\nAI: ${aiHistory[i]}\n`;
        }
        latestResponse=dj;
        history=`${info}\n\n${history} AI:${latestResponse}`;
        ee(history)
    }
    else{
        latestResponse=dj;
        ee(latestResponse);
    }
}