const mockReviews = [
  {
    id: 1,
    customer_name: 'María G.',
    rating: 5,
    title: 'Muy buena compra, super visible',
    comment: 'La compré porque se hace obligatoria el año que viene y la verdad que estoy muy contenta. La luz es super potente, la he probado de día y se ve perfectamente. El imán se pega muy bien al techo del coche. Viene en una caja pequeña que cabe perfecta en la guantera.',
    helpful_count: 156,
    verified_purchase: true,
    created_at: new Date('2024-11-18')
  },
  {
    id: 2,
    customer_name: 'Carlos R.',
    rating: 5,
    title: 'Obligatoria y cumple perfectamente',
    comment: 'Con el tema de que será obligatoria desde enero decidí comprarla ya. Tiene el certificado IDIADA que es el que pide la DGT, así que sin problemas. La he usado una vez en una avería y se veía desde muy lejos. Muy recomendable.',
    helpful_count: 143,
    verified_purchase: true,
    created_at: new Date('2024-11-16')
  },
  {
    id: 3,
    customer_name: 'Ana M.',
    rating: 5,
    title: 'Imprescindible llevarla',
    comment: 'Me ha parecido muy buena. Compacta, ligera y potente. He comprado 3, una para cada coche familiar. La batería dura horas según pone en las instrucciones. El precio me parece correcto para un producto homologado.',
    helpful_count: 134,
    verified_purchase: true,
    created_at: new Date('2024-11-14')
  },
  {
    id: 4,
    customer_name: 'Javier L.',
    rating: 4,
    title: 'Buena pero un poco cara',
    comment: 'El producto está muy bien, cumple con la normativa y funciona perfectamente. Le quito una estrella porque me parece un poco cara para lo que es, aunque entiendo que al ser obligatoria y estar homologada tiene ese precio. Aún así la recomiendo.',
    helpful_count: 89,
    verified_purchase: true,
    created_at: new Date('2024-11-12')
  },
  {
    id: 5,
    customer_name: 'Laura S.',
    rating: 5,
    title: 'Súper visible, muy contenta',
    comment: 'Llegó en 2 días, perfectamente embalada. La luz es muy potente, más de lo que esperaba. Se activa sola al colocarla en el techo gracias al imán. Muy fácil de usar. Sin duda vale la pena.',
    helpful_count: 167,
    verified_purchase: true,
    created_at: new Date('2024-11-10')
  },
  {
    id: 6,
    customer_name: 'Miguel F.',
    rating: 5,
    title: 'Perfecta para la normativa nueva',
    comment: 'Con la ley que entra en 2026 hay que llevar estas balizas sí o sí. Esta tiene todos los papeles en regla, certificado IDIADA y todo. La he probado y funciona genial. Cabe en cualquier sitio del coche.',
    helpful_count: 128,
    verified_purchase: true,
    created_at: new Date('2024-11-08')
  },
  {
    id: 7,
    customer_name: 'Carmen R.',
    rating: 5,
    title: 'Muy buena calidad',
    comment: 'Después de mirar varias opciones me decidí por esta por las buenas opiniones y no me arrepiento. La construcción es sólida, no parece de plástico barato. La luz es muy brillante y el imán es potente. Totalmente recomendable.',
    helpful_count: 145,
    verified_purchase: true,
    created_at: new Date('2024-11-06')
  },
  {
    id: 8,
    customer_name: 'Pedro G.',
    rating: 5,
    title: 'Se ve desde muy lejos',
    comment: 'La probé en la carretera con mi mujer y desde 200 metros se veía perfectamente. La luz parpadea y es muy llamativa. El sistema de imán es genial, se queda súper fija. Una compra muy acertada.',
    helpful_count: 112,
    verified_purchase: true,
    created_at: new Date('2024-11-04')
  },
  {
    id: 9,
    customer_name: 'Isabel T.',
    rating: 4,
    title: 'Buena baliza',
    comment: 'La baliza está muy bien, funciona perfectamente y es muy visible. Le pongo 4 estrellas porque el envío tardó más de lo esperado, unos 5 días. Pero el producto en sí genial, cumple con lo prometido.',
    helpful_count: 98,
    verified_purchase: true,
    created_at: new Date('2024-11-02')
  },
  {
    id: 10,
    customer_name: 'Antonio J.',
    rating: 5,
    title: 'Obligatoria y necesaria',
    comment: 'La ley dice que desde 2026 es obligatorio llevarla, así que mejor adelantarse. Esta baliza V-16 está homologada y funciona de maravilla. Es robusta, la luz es muy potente y cabe en la guantera sin problema.',
    helpful_count: 176,
    verified_purchase: true,
    created_at: new Date('2024-10-31')
  },
  {
    id: 11,
    customer_name: 'Lucía H.',
    rating: 5,
    title: 'Muy fácil de usar',
    comment: 'Me encanta que sea tan sencilla. Simplemente la sacas y la colocas en el techo del coche, el imán hace el resto. No hay que darle a ningún botón ni nada, se activa sola. Perfecta para emergencias.',
    helpful_count: 134,
    verified_purchase: true,
    created_at: new Date('2024-10-29')
  },
  {
    id: 12,
    customer_name: 'Fernando P.',
    rating: 5,
    title: 'Certificada y homologada',
    comment: 'Lo más importante es que tiene el certificado IDIADA que es lo que pide la DGT. La he comprobado y todo está en regla. La luz es visible incluso con sol directo. Muy buena inversión en seguridad.',
    helpful_count: 142,
    verified_purchase: true,
    created_at: new Date('2024-10-27')
  },
  {
    id: 13,
    customer_name: 'Rosa M.',
    rating: 5,
    title: 'Excelente producto',
    comment: 'Compré dos, una para mi coche y otra para el de mi marido. Las dos funcionan perfectas. La batería dura muchísimo y el diseño es muy compacto. Buena calidad de materiales. Muy recomendable.',
    helpful_count: 159,
    verified_purchase: true,
    created_at: new Date('2024-10-25')
  },
  {
    id: 14,
    customer_name: 'Diego S.',
    rating: 4,
    title: 'Buen producto, precio ajustado',
    comment: 'La baliza funciona muy bien, es visible y cumple la normativa. El precio está en línea con otras similares del mercado. Le doy 4 estrellas porque esperaba que fuera un poco más barata, pero bueno, es un producto de seguridad.',
    helpful_count: 87,
    verified_purchase: true,
    created_at: new Date('2024-10-23')
  },
  {
    id: 15,
    customer_name: 'Elena V.',
    rating: 5,
    title: 'Muy potente y visible',
    comment: 'La luz naranja es super brillante. La he probado de noche y de día y en ambas situaciones se ve perfectamente. El imán es muy fuerte, no se mueve nada. Estoy muy satisfecha con la compra.',
    helpful_count: 151,
    verified_purchase: true,
    created_at: new Date('2024-10-21')
  },
  {
    id: 16,
    customer_name: 'Ricardo N.',
    rating: 5,
    title: 'Cumple perfectamente',
    comment: 'Baliza V-16 homologada como debe ser. La he usado una vez en una emergencia real y funcionó perfecta. Se veía desde muy lejos y llamaba mucho la atención. Una compra imprescindible para el coche.',
    helpful_count: 163,
    verified_purchase: true,
    created_at: new Date('2024-10-19')
  },
  {
    id: 17,
    customer_name: 'Beatriz L.',
    rating: 5,
    title: 'Muy contenta con la compra',
    comment: 'Me gusta que sea pequeña y manejable. Cabe perfectamente en la guantera y no ocupa mucho espacio. La luz funciona genial, muy visible. El envío llegó rápido y bien protegido. 100% recomendable.',
    helpful_count: 139,
    verified_purchase: true,
    created_at: new Date('2024-10-17')
  },
  {
    id: 18,
    customer_name: 'Alberto C.',
    rating: 5,
    title: 'Imprescindible en el coche',
    comment: 'Con la nueva normativa es obligatorio llevarla. He elegido esta porque tiene muy buenas opiniones y cumple con todo lo que exige la DGT. El imán es muy potente y la luz se ve a kilómetros.',
    helpful_count: 147,
    verified_purchase: true,
    created_at: new Date('2024-10-15')
  },
  {
    id: 19,
    customer_name: 'Cristina F.',
    rating: 4,
    title: 'Buena relación calidad-precio',
    comment: 'Está bien por el precio que tiene. Funciona correctamente y cumple la normativa. La he probado y se ve bien. Le doy 4 estrellas porque he visto otras más baratas, aunque no sé si estarán homologadas.',
    helpful_count: 95,
    verified_purchase: true,
    created_at: new Date('2024-10-13')
  },
  {
    id: 20,
    customer_name: 'Manuel D.',
    rating: 5,
    title: 'Súper recomendable',
    comment: 'Una de las mejores compras que he hecho para el coche. La luz es potentísima, el imán sujeta genial y tiene todos los certificados necesarios. Además el tamaño es perfecto. No dudaría en comprarla de nuevo.',
    helpful_count: 184,
    verified_purchase: true,
    created_at: new Date('2024-10-11')
  }
];

let currentRating = 0;
let allReviews = [...mockReviews];

function renderReviews(reviews) {
  const reviewsList = document.getElementById('reviews-list');
  if (!reviewsList) return;

  reviewsList.innerHTML = reviews.map(review => `
    <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div class="flex items-start justify-between mb-4">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-semibold text-gray-900">${escapeHtml(review.customer_name)}</span>
            ${review.verified_purchase ? '<span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Compra verificada</span>' : ''}
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              ${Array(5).fill(0).map((_, i) => `
                <svg class="h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              `).join('')}
            </div>
            <span class="text-sm text-gray-500">${formatDate(review.created_at)}</span>
          </div>
        </div>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2">${escapeHtml(review.title)}</h3>
      <p class="text-gray-600 mb-4 leading-relaxed">${escapeHtml(review.comment)}</p>
      <div class="flex items-center gap-4 text-sm">
        <button class="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
          </svg>
          Útil (${review.helpful_count})
        </button>
      </div>
    </div>
  `).join('');
}

function sortReviews(criteria) {
  let sorted = [...allReviews];

  switch(criteria) {
    case 'recent':
      sorted.sort((a, b) => b.created_at - a.created_at);
      break;
    case 'helpful':
      sorted.sort((a, b) => b.helpful_count - a.helpful_count);
      break;
    case 'rating-high':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'rating-low':
      sorted.sort((a, b) => a.rating - b.rating);
      break;
  }

  renderReviews(sorted);
}

function formatDate(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diff === 0) return 'Hoy';
  if (diff === 1) return 'Ayer';
  if (diff < 7) return `Hace ${diff} días`;
  if (diff < 30) return `Hace ${Math.floor(diff / 7)} semanas`;
  if (diff < 365) return `Hace ${Math.floor(diff / 30)} meses`;

  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', function() {
  renderReviews(allReviews);

  const sortSelect = document.getElementById('sort-reviews');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      sortReviews(this.value);
    });
  }

  const starButtons = document.querySelectorAll('.star-button');
  starButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentRating = parseInt(this.dataset.rating);
      document.getElementById('rating-input').value = currentRating;

      starButtons.forEach((btn, index) => {
        if (index < currentRating) {
          btn.classList.remove('text-gray-300');
          btn.classList.add('text-yellow-400');
        } else {
          btn.classList.remove('text-yellow-400');
          btn.classList.add('text-gray-300');
        }
      });
    });

    button.addEventListener('mouseenter', function() {
      const rating = parseInt(this.dataset.rating);
      starButtons.forEach((btn, index) => {
        if (index < rating) {
          btn.classList.add('text-yellow-400');
        }
      });
    });
  });

  const formContainer = document.querySelector('.star-button');
  if (formContainer) {
    const parentDiv = formContainer.closest('div');
    if (parentDiv) {
      parentDiv.addEventListener('mouseleave', function() {
        starButtons.forEach((btn, index) => {
          if (index < currentRating) {
            btn.classList.remove('text-gray-300');
            btn.classList.add('text-yellow-400');
          } else {
            btn.classList.remove('text-yellow-400');
            btn.classList.add('text-gray-300');
          }
        });
      });
    }
  }

  const form = document.getElementById('submit-review-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (currentRating === 0) {
        alert('Por favor, selecciona una valoración de estrellas');
        return;
      }

      const formData = new FormData(form);
      const newReview = {
        id: allReviews.length + 1,
        customer_name: formData.get('customer_name'),
        rating: currentRating,
        title: formData.get('title'),
        comment: formData.get('comment'),
        helpful_count: 0,
        verified_purchase: false,
        created_at: new Date()
      };

      alert('¡Gracias por tu valoración! Será revisada antes de publicarse.');

      form.reset();
      currentRating = 0;
      starButtons.forEach(btn => {
        btn.classList.remove('text-yellow-400');
        btn.classList.add('text-gray-300');
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
