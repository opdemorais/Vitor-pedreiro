function contatoWhatsApp(message) {
    const phoneNumber = '5575981283826'; // Substitua pelo número de contato do Vitor
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
