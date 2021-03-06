import '../../../component/restaurant-list';

class HomeView {
  getTemplate() {
    return /* html */ `
      <section class="hero-section">
        <div class="hero-image-div">
          <img src="images/hero-image_4.jpg"
          srcset="images/hero-image_4-small.jpg 480w, images/hero-image_4-large.jpg 800w"
          sizes="(max-width: 600px) 480px, 800px" 
          class="hero-image" alt="banner image"/>
        </div>
        <div class="hero-overlay-div"></div>
        <div class="hero-text-div">
          <h1 class="hero-text">Discover the best restaurant in the world</h1>
        </div>
      </section>
      <section class="content" id="mainContent">
        <div class="collections">
          <h1 class="collections-label">Collections</h1>
          <p class="collections-desc">Explore rated lists of top restaurants</p>
          <restaurant-list class="restaurant-list"></restaurant-list>
        </div>
      </section>
    `;
  }

  showRestaurantList(restaurants) {
    const restaurantsElement = document.querySelector('.restaurant-list');

    if (restaurants.length > 0) {
      restaurantsElement.restaurants = restaurants;
    } else {
      this._renderEmptyRestaurantTemplate(restaurantsElement);
    }
  }

  _renderEmptyRestaurantTemplate(restaurantsElement) {
    restaurantsElement.renderError('Failed to fetch data, please check your connection first.');
    restaurantsElement.classList.add('restaurant-empty');
  }
}

export default HomeView;
