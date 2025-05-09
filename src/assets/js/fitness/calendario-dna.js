document.addEventListener('DOMContentLoaded', function () {
    // Dados dos eventos por data (formato: YYYY-MM-DD)
    const eventosPorData = {
        '2025-05-05': [
            {
                horario: '08:00 - 09:30',
                titulo: 'Consulta Nutricional',
                descricao: 'Avaliação mensal',
                imagem: 'assets/img/fitness/image-11.jpg',
                destacado: false,
            },
            {
                horario: '14:00 - 15:00',
                titulo: 'Treino Funcional',
                descricao: 'Academia Central',
                imagem: 'assets/img/fitness/image-3.jpg',
                destacado: true,
            },
        ],
        '2025-05-06': [
            {
                horario: '10:30 - 11:30',
                titulo: 'Aula de Natação',
                descricao: 'Piscina Olímpica',
                imagem: 'assets/img/fitness/image-10.jpg',
                destacado: false,
            },
        ],
        '2025-05-07': [
            {
                horario: '09:00 - 10:30',
                titulo: 'Avaliação Física',
                descricao: 'Centro de Treinamento',
                imagem: 'assets/img/fitness/image-11.jpg',
                destacado: false,
            },
            {
                horario: '16:00 - 17:30',
                titulo: 'Yoga para Atletas',
                descricao: 'Instrutor: João Silva',
                imagens: ['assets/img/modern-ai-image/user-5.jpg', 'assets/img/modern-ai-image/user-6.jpg'],
                destacado: false,
            },
        ],
        '2025-05-08': [
            {
                horario: '11:00 - 12:00',
                titulo: 'Fisioterapia',
                descricao: 'Clínica Esportiva',
                imagem: 'assets/img/modern-ai-image/user-4.jpg',
                destacado: false,
            },
        ],
        '2025-05-09': [
            {
                horario: '13:00 - 14:30',
                titulo: 'Almoço Proteico',
                descricao: 'Restaurante DNA',
                imagens: ['assets/img/modern-ai-image/user-4.jpg', 'assets/img/fitness/image-10.jpg'],
                destacado: true,
            },
        ],
        '2025-05-10': [],
        '2025-05-11': [
            {
                horario: '15:00 - 16:00',
                titulo: 'Corrida ao Ar Livre',
                descricao: 'Parque da Cidade',
                imagem: 'assets/img/fitness/image-3.jpg',
                destacado: false,
            },
        ],
    };

    // Inicializar Swiper para datas
    const swiperDates = new Swiper('.dateselect', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        initialSlide: 2, // Começando na quarta-feira (índice 2)
    });

    // Função para formatar a data atual no formato YYYY-MM-DD
    function formatarDataAtual() {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    // Função para carregar eventos de uma data específica
    function carregarEventos(data) {
        const eventosContainer = document.getElementById('eventos-container');
        const semEventos = document.getElementById('sem-eventos');

        // Limpar container de eventos
        eventosContainer.innerHTML = '';

        // Verificar se existem eventos para a data
        const eventos = eventosPorData[data] || [];

        if (eventos.length === 0) {
            eventosContainer.innerHTML = `
                <div class="d-flex align-items-center justify-content-center py-3">
                    <p class="text-secondary mb-0">Sem atividades para este dia</p>
                </div>
            `;
            return;
        }

        // Renderizar eventos
        eventos.forEach((evento) => {
            let eventoHTML = '';
            const cardClass = evento.destacado ? 'bg-r-gradient' : '';

            eventoHTML += `
                <div class="card ${cardClass} mb-2">
                    <div class="card-body">
                        <p class="mb-3 small fw-medium text-secondary">
                            ${evento.horario} <span class="text-warning bi bi-tag"></span>
                        </p>
                        <div class="row align-items-center gx-2 mb-0">
                            <div class="col-auto">
            `;

            // Adicionando imagens
            if (evento.imagens) {
                evento.imagens.forEach((img) => {
                    eventoHTML += `<img src="${img}" class="avatar avatar-40 rounded" alt="" />`;
                });
            } else if (evento.imagem) {
                eventoHTML += `<img src="${evento.imagem}" class="avatar avatar-40 rounded" alt="" />`;
            }

            eventoHTML += `
                            </div>
                            <div class="col">
                                <h6 class="mb-0">${evento.titulo}</h6>
                                <p class="text-secondary small text-truncated">${evento.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            eventosContainer.innerHTML += eventoHTML;
        });
    }

    // Inicializar o calendário com a data ativa
    const slidesData = document.querySelectorAll('.dateselect .swiper-slide');
    let dataAtiva = slidesData[2].getAttribute('data-date'); // Por padrão, quarta-feira (índice 2)
    carregarEventos(dataAtiva);

    // Adicionar evento de clique aos dias
    slidesData.forEach((slide) => {
        slide.addEventListener('click', function () {
            // Remover classe active de todos os slides
            slidesData.forEach((s) => s.classList.remove('active'));

            // Adicionar classe active ao slide clicado
            this.classList.add('active');

            // Obter data do slide clicado
            const data = this.getAttribute('data-date');

            // Carregar eventos para a data selecionada
            carregarEventos(data);
        });
    });

    // Botão "Hoje"
    document.getElementById('hoje-btn').addEventListener('click', function () {
        const dataAtual = formatarDataAtual();

        // Encontrar o slide mais próximo da data atual
        let slideIndex = 2; // Por padrão, quarta-feira

        slidesData.forEach((slide, index) => {
            if (slide.getAttribute('data-date') === dataAtual) {
                slideIndex = index;
            }
        });

        // Atualizar o Swiper para mostrar o slide de hoje
        swiperDates.slideTo(slideIndex);

        // Atualizar a aparência dos slides
        slidesData.forEach((s) => s.classList.remove('active'));
        slidesData[slideIndex].classList.add('active');

        // Carregar eventos para hoje
        carregarEventos(slidesData[slideIndex].getAttribute('data-date'));
    });
});
