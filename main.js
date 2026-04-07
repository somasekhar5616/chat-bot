<script>
  // మీ వెబ్ యాప్ URL ని ఇక్కడ పెట్టండి
  const webAppUrl = "https://script.google.com/macros/s/AKfycbxFllX9QitKBTJEmy2Mm5wPkHxkMkyPuQ-O84OcqI6iADCcVcBsZ_vzGAnwdixbPpkvzg/exec"; 

  function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    // యూజర్ మెసేజ్ ని చాట్ బాక్స్ లో చూపించడం
    chatbox.innerHTML += `<p>You: ${userInput}</p>`;

    // వెబ్ యాప్ కి డేటా పంపించడం
    fetch(`${webAppUrl}?q=${userInput}`)
      .then(response => response.json())
      .then(data => {
        // రిజల్ట్స్ ని చాట్ బాక్స్ లో చూపించడం
        if (data.success && data.cards.length > 0) {
          data.cards.forEach(card => {
            chatbox.innerHTML += `<p>Bot: ${card.partNumber} - ${card.description}</p>`;
          });
        } else {
          chatbox.innerHTML += `<p>Bot: No results found.</p>`;
        }
      });
  }
</script>
