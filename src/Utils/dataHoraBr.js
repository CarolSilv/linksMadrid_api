function getDataHoraBrasil() {
    // Obtendo a data e hora atual
    const dataHoraAtual = new Date();

    // Ajustando para o fuso horário do Brasil (UTC-3)
    const fusoBrasil = -3;
    const offsetBrasil = fusoBrasil * 60; // Convertendo horas para minutos
    const offsetAtual = dataHoraAtual.getTimezoneOffset(); // Offset atual do sistema em minutos
    const offsetTotal = offsetAtual - offsetBrasil; // Offset total necessário

    // Aplicando o offset total para obter a hora no fuso horário do Brasil
    const horaBrasil = new Date(dataHoraAtual.getTime() + (offsetTotal * 60 * 1000));

    // Formatando a data e hora no formato ISO 8601
    const dataHoraISO = horaBrasil.toISOString();

    return dataHoraISO;
}

module.exports = { getDataHoraBrasil }