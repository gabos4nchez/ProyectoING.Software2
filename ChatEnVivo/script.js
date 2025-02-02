function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value.trim();
    
    if (messageText === "") return; // Evitar mensajes vacíos

    let chatBox = document.getElementById("chatBox");

    // Crear el mensaje del cliente
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "cliente");
    messageDiv.textContent = messageText;
    chatBox.appendChild(messageDiv);

    // Desplazar el chat automáticamente hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;

    // Limpiar el input
    messageInput.value = "";

    // Llamar a la función para la respuesta automática
    setTimeout(() => {
        let response = getBotResponse(messageText);
        displayBotResponse(response);
    }, 1000); // Respuesta después de 1 segundo
}

function getBotResponse(userMessage) {
    // Palabras clave y respuestas simuladas
    const responses = {
        "hola": [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Hola! ¿Cómo estás? ¿Necesitas algo?",
            "¡Hola! ¿Qué tal? Estoy aquí para ayudarte."
        ],
        "Hola": [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Hola! ¿Cómo estás? ¿Necesitas algo?",
            "¡Hola! ¿Qué tal? Estoy aquí para ayudarte."
        ],
        "Buenas tardes": [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Hola! ¿Cómo estás? ¿Necesitas algo?",
            "¡Hola! ¿Qué tal? Estoy aquí para ayudarte."
        ],
        "Buenos dias": [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Hola! ¿Cómo estás? ¿Necesitas algo?",
            "¡Hola! ¿Qué tal? Estoy aquí para ayudarte."
        ],
        "Buenas noches": [
            "¡Hola! ¿En qué puedo ayudarte hoy?",
            "¡Hola! ¿Cómo estás? ¿Necesitas algo?",
            "¡Hola! ¿Qué tal? Estoy aquí para ayudarte."
        ],
        "Informacion":[
            "¿En qué puedo ayudarte? Pregunta lo que necesites saber.",
            "¡Claro! Estoy aquí para responder tus preguntas. ¿Qué necesitas?",
            "¡Por supuesto! ¿Qué información necesitas? ¡Pregunta sin miedo!"
        ],
        "informacion": [
            "¿En qué puedo ayudarte? Pregunta lo que necesites saber.",
            "¡Claro! Estoy aquí para responder tus preguntas. ¿Qué necesitas?",
            "¡Por supuesto! ¿Qué información necesitas? ¡Pregunta sin miedo!"
        ],
        "Costo": [
            "¿De qué producto te gustaría saber el precio?",
            "¿De qué producto te interesa saber el precio?",
            "Dime, ¿qué producto necesitas consultar el precio?"
        ],
        "costo": [
            "¿De qué producto te gustaría saber el precio?",
            "¿De qué producto te interesa saber el precio?",
            "Dime, ¿qué producto necesitas consultar el precio?"
        ],
        "Producto": [
            "¿Qué producto te interesa? Puedo ayudarte con la información.",
            "¿Estás buscando un producto en particular? Avísame, ¡y te ayudo!"
        ],
        "producto": [
            "¿Qué producto te interesa? Puedo ayudarte con la información.",
            "¿Estás buscando un producto en particular? Avísame, ¡y te ayudo!"
        ],
        "gracias": [
            "¡De nada! Si necesitas algo más, no dudes en preguntar.",
            "¡Con gusto! Si tienes alguna otra duda, estoy aquí.",
            "¡Un placer! No dudes en regresar si necesitas algo más."
        ],
        "Gracias": [
            "¡De nada! Si necesitas algo más, no dudes en preguntar.",
            "¡Con gusto! Si tienes alguna otra duda, estoy aquí.",
            "¡Un placer! No dudes en regresar si necesitas algo más."
        ],
        "horarios": [
            "Nuestro horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM.",
            "Abrimos de lunes a viernes, de 9:00 AM a 6:00 PM. ¡Te esperamos!",
            "Puedes visitarnos de lunes a viernes entre 9:00 AM y 6:00 PM."
        ],
        "Horarios": [
            "Nuestro horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM.",
            "Abrimos de lunes a viernes, de 9:00 AM a 6:00 PM. ¡Te esperamos!",
            "Puedes visitarnos de lunes a viernes entre 9:00 AM y 6:00 PM."
        ],
        "envios": [
            "Realizamos envíos a nivel nacional. ¿A qué ciudad deseas que enviemos el producto?",
            "Sí, enviamos a todo el país. ¿A qué lugar te gustaría que enviemos el pedido?",
            "Realizamos envíos a todo el territorio nacional, ¿dónde te gustaría recibir tu pedido?"
        ],
        "Envios": [
            "Realizamos envíos a nivel nacional. ¿A qué ciudad deseas que enviemos el producto?",
            "Sí, enviamos a todo el país. ¿A qué lugar te gustaría que enviemos el pedido?",
            "Realizamos envíos a todo el territorio nacional, ¿dónde te gustaría recibir tu pedido?"
        ],
        "default": [
            "Lo siento, no entendí lo que dijiste. ¿Puedes reformular?",
            "No estoy seguro de haber entendido bien, ¿puedes intentar de nuevo?",
            "Lo siento, no comprendo eso. ¿Podrías decirlo de otra forma?"
        ],
        "adios": [
            "¡Adiós! Si necesitas algo más, estaré aquí para ayudarte.",
            "¡Hasta luego! No dudes en regresar si tienes alguna otra pregunta.",
            "¡Nos vemos! Si tienes alguna otra duda, ¡estaré aquí!"
        ],
    };

    // Normalizamos el mensaje
    userMessage = userMessage.toLowerCase();

    // Buscamos una respuesta
    let responseList = responses[userMessage] || responses["default"];
    // Seleccionamos una respuesta aleatoria si hay varias
    let response = responseList[Math.floor(Math.random() * responseList.length)];

    return response;
}

function displayBotResponse(response) {
    let chatBox = document.getElementById("chatBox");

    // Crear el mensaje del proveedor
    let botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("message", "proveedor");
    botMessageDiv.textContent = response;

    // Agregar el mensaje al chat
    chatBox.appendChild(botMessageDiv);

    // Desplazar el chat automáticamente hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}
