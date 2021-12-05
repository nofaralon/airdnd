<template>
  <section v-if="stay" class="stay-details details-layout">
    <h1>{{ stay.name }}</h1>

    <div class="detsils-header">
      <a href="">{{ stay.loc.address }}</a>
      <span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="medal"
          class="svg-inline--fa fa-medal fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"
          ></path>
        </svg>
        Superhost</span
      >
      <span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class="svg-inline--fa fa-star fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
        4.39 <a>({{ stay.reviews.length }} {{ setReviews }})</a></span
      >
    </div>

    <div class="img-container">
      <img v-for="(img, index) in imgs" :key="index" :src="img" alt="" />
    </div>

    <section class="info-container">
      <div class="stay-info">
        <div class="info-header">
          <div>
            <h2><span class="stay-name">{{ stay.type }}</span> hosted by {{ stay.host.fullname }}</h2>
            <span
              >{{ stay.capacity }} Guests • {{ stay.bedroom }}
              {{ setBedrooms }} • {{ stay.beds }} {{ setBeds }} •
              {{ stay.bathrooms }} {{ setBaths }}
            </span>
          </div>
          <img :src="`${stay.host.imgUrl}`" />
        </div>

        <div class="main-info">
          <div class="general-info">
            <div>
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  class="svg-inline--fa fa-home fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>Entire place</h3>
                <span>You'll have the place to yourself.</span>
              </div>
            </div>

            <div>
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="book-open"
                  class="svg-inline--fa fa-book-open fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>House rules</h3>
                <span>
                  This place isn’t suitable for children under 12 and the host
                  doesn’t allow pets.
                </span>
              </div>
            </div>

            <div>
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="medal"
                  class="svg-inline--fa fa-medal fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>{{ stay.host.fullname }} is a superhost</h3>
                <span>
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </span>
              </div>
            </div>

            <div>
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="wifi"
                  class="svg-inline--fa fa-wifi fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>Wifi</h3>
                <span>Guests often search for this popular amenity.</span>
              </div>
            </div>
          </div>

          <div class="description">
            <h2>Description</h2>
            <p>{{ stay.summary }}</p>
          </div>

          <div class="amenities">
            <h2>Amenities</h2>
            <ul>
              <div>
                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wifi"
                      class="svg-inline--fa fa-wifi fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"
                      ></path>
                    </svg>
                  </div>
                  <span>Wifi</span>
                </li>

                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="utensils"
                      class="svg-inline--fa fa-utensils fa-w-13"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 416 512"
                    >
                      <path
                        fill="currentColor"
                        d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
                      ></path>
                    </svg>
                  </div>
                  <span>Kitchen</span>
                </li>

                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paw"
                      class="svg-inline--fa fa-paw fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
                      ></path>
                    </svg>
                  </div>
                  <span>Pets allowed</span>
                </li>
              </div>
              <div>
                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="swimming-pool"
                      class="svg-inline--fa fa-swimming-pool fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M624 416h-16c-26.04 0-45.8-8.42-56.09-17.9-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 407.58 442.04 416 416 416s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 407.58 250.04 416 224 416s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 407.58 58.04 416 32 416H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84 23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-400-32v-96h192v96c19.12 0 30.86-6.16 34.39-9.42 9.17-8.46 19.2-14.34 29.61-18.07V128c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16c0-52.94-43.06-96-96-96s-96 43.06-96 96v96H224v-96c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16c0-52.94-43.06-96-96-96s-96 43.06-96 96v228.5c10.41 3.73 20.44 9.62 29.61 18.07 3.53 3.27 15.27 9.43 34.39 9.43z"
                      ></path>
                    </svg>
                  </div>
                  <span>pool</span>
                </li>

                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="video"
                      class="svg-inline--fa fa-video fa-w-18"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                      ></path>
                    </svg>
                  </div>
                  <span>Security camera</span>
                </li>

                <li>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tv"
                      class="svg-inline--fa fa-tv fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"
                      ></path>
                    </svg>
                  </div>
                  <span>Tv</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <order-form @check="check" :stay="stay" :order="order"></order-form>
    </section>

    <section class="reviews">
      <h1>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class="svg-inline--fa fa-star fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
        4.39 <span>• {{ stay.reviews.length }} {{ setReviews }}</span>
      </h1>
      <div v-for="review in stay.reviews" :key="review.id">
        <div class="review-details">
          <div>
            <img :src="`${review.by.imgUrl}`" />
            <div class="user-details">
              <span>{{ review.by.fullname }}</span>
              <div>
                {{ randomDate(new Date(2019, 0, 1), new Date(), 0, 24) }}
              </div>
            </div>
          </div>
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            {{ review.rate }}</span
          >
          <p>{{ review.txt }}</p>
        </div>
      </div>
    </section>

    <section class="map-details">
      <h1>Where you’ll be</h1>
      <GmapMap
        class="map"
        :stay="stay"
        :options="{
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
        }"
      />
      <h3>{{ stay.loc.address }}</h3>
      <p>{{ stay.around }}</p>
    </section>
  </section>
</template>


<script>
import GmapMap from "../cmps/map-details.vue";
import orderForm from "../cmps/order-form.vue";

import { orderService } from "../services/order.service";

export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      imgs: [],
      amenities: null,
      order: {},
    };
  },
  created() {
    this.loadStay();
    this.order = orderService.getEmptyOrder();
    this.$emit("header", "details");
  },
  methods: {
    loadStay() {
      const { stayId } = this.$route.params;
      this.$store.dispatch({ type: "getStay", stayId }).then((stay) => {
        this.stay = stay;
        if (this.stay) {
          this.imgForDisplay();
        }
      });
    },
    imgForDisplay() {
      var imgs = this.stay.imgUrls.slice(0, 5);
      this.imgs = imgs;
    },
    randomDate(start, end, startHour, endHour) {
      var date = new Date(+start + Math.random() * (end - start));
      var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
      date.setHours(hour);
      var sortDate = date.toString().slice(3, 15);
      return sortDate;
    },
    check() {
      const { _id, name, price } = this.stay;
      this.order.stay = { _id, name, price };
      this.order.hostId = this.stay.host._id;
      console.log(this.order.stay);
      this.$store.dispatch({ type: "addOrder", order: { ...this.order } });
    },
  },
  computed: {
    stayPrice() {
      return this.stay.price.toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 0,
      });
    },
    setReviews() {
      if (this.stay.reviews.length > 1) return "reviews";
      else return "review";
    },
    setBedrooms() {
      if (this.stay.bedroom > 1) return "bedrooms";
      else return "bedroom";
    },
    setBeds() {
      if (this.stay.beds > 1) return "beds";
      else return "bed";
    },
    setBaths() {
      if (this.stay.bathrooms > 1) return "baths";
      else return "bath";
    },
  },
  components: {
    GmapMap,
    orderForm,
  },
};
</script>
