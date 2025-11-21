const mockReviews = [
  {
    id: 1,
    customer_name: 'María González',
    rating: 5,
    title: 'Excelente producto, muy recomendable',
    comment: 'La baliza es de muy buena calidad. Fácil de usar y cumple perfectamente con la normativa DGT. La luz es muy potente y visible incluso en condiciones de poca visibilidad.',
    helpful_count: 42,
    verified_purchase: true,
    created_at: new Date('2024-11-15')
  },
  {
    id: 2,
    customer_name: 'Carlos Rodríguez',
    rating: 5,
    title: 'Obligatoria y de calidad',
    comment: 'Con la nueva normativa era necesario comprarla. Esta baliza V-16 es perfecta, muy fácil de colocar en el techo del coche y se ve a gran distancia. Muy contento con la compra.',
    helpful_count: 38,
    verified_purchase: true,
    created_at: new Date('2024-11-12')
  },
  {
    id: 3,
    customer_name: 'Ana Martínez',
    rating: 5,
    title: 'Imprescindible para cumplir la ley',
    comment: 'Compré dos unidades para mis dos coches. La baliza es muy resistente, la batería dura mucho y el imán es muy potente. Además, tiene certificado IDIADA que es lo que exige la DGT.',
    helpful_count: 35,
    verified_purchase: true,
    created_at: new Date('2024-11-10')
  },
  {
    id: 4,
    customer_name: 'Javier López',
    rating: 4,
    title: 'Buena compra',
    comment: 'Producto de calidad, cumple con lo esperado. La única pega es que el precio podría ser un poco más ajustado, pero entiendo que es un producto homologado y de seguridad.',
    helpful_count: 28,
    verified_purchase: true,
    created_at: new Date('2024-11-08')
  },
  {
    id: 5,
    customer_name: 'Laura Sánchez',
    rating: 5,
    title: 'Muy visible y fácil de usar',
    comment: 'La luz naranja es muy potente y se ve perfectamente de día y de noche. El imán se adhiere muy bien al techo del coche. Llegó rápido y bien embalada. Totalmente recomendable.',
    helpful_count: 31,
    verified_purchase: true,
    created_at: new Date('2024-11-05')
  },
  {
    id: 6,
    customer_name: 'Miguel Fernández',
    rating: 5,
    title: 'Cumple perfectamente con la normativa',
    comment: 'Baliza homologada por IDIADA como requiere la DGT. La he probado y funciona perfectamente. Es compacta, cabe en la guantera sin problema. Imprescindible desde 2026.',
    helpful_count: 26,
    verified_purchase: true,
    created_at: new Date('2024-11-03')
  },
  {
    id: 7,
    customer_name: 'Carmen Ruiz',
    rating: 5,
    title: 'Excelente relación calidad-precio',
    comment: 'Después de comparar varias opciones, esta es la mejor. Buena calidad de construcción, batería de larga duración y precio competitivo. La recomiendo sin dudarlo.',
    helpful_count: 24,
    verified_purchase: true,
    created_at: new Date('2024-11-01')
  },
  {
    id: 8,
    customer_name: 'Pedro García',
    rating: 5,
    title: 'Muy buena visibilidad',
    comment: 'La luz se ve a mucha distancia, es muy brillante. El sistema magnético funciona genial, se queda bien fijada al techo del coche. Muy satisfecho con la compra.',
    helpful_count: 22,
    verified_purchase: true,
    created_at: new Date('2024-10-28')
  },
  {
    id: 9,
    customer_name: 'Isabel Torres',
    rating: 4,
    title: 'Buen producto',
    comment: 'Baliza de buena calidad. Fácil de activar y muy visible. Le doy 4 estrellas porque tardó un poco en llegar, pero el producto en sí es excelente.',
    helpful_count: 19,
    verified_purchase: true,
    created_at: new Date('2024-10-25')
  },
  {
    id: 10,
    customer_name: 'Antonio Jiménez',
    rating: 5,
    title: 'Indispensable en el coche',
    comment: 'Con la nueva ley es obligatorio llevarla. Esta baliza V-16 cumple todos los requisitos. Es robusta, funcional y muy visible. Una compra necesaria y acertada.',
    helpful_count: 29,
    verified_purchase: true,
    created_at: new Date('2024-10-22')
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

  const formContainer = document.querySelector('.star-button').closest('div');
  if (formContainer) {
    formContainer.addEventListener('mouseleave', function() {
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
