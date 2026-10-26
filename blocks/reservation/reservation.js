
export default function decorate(block) {
  block.innerHTML = `
    <div class="reservation__intro">
      <p class="reservation__eyebrow">YOUR TABLE AWAITS</p>
      <h2>Reserve Your Table</h2>
      <p>Gather around the table for a memorable meal.</p>
    </div>

    <form class="reservation__form">
      <div class="reservation__field">
        <label for="reservation-name">Full name</label>
        <input id="reservation-name" name="name"
          type="text" autocomplete="name" required
          placeholder="Your name">
      </div>

      <div class="reservation__field">
        <label for="reservation-email">Email address</label>
        <input id="reservation-email" name="email"
          type="email" autocomplete="email" required
          placeholder="you@example.com">
      </div>

      <div class="reservation__field">
        <label for="reservation-date">Reservation date</label>
        <input id="reservation-date" name="date"
          type="date" required>
      </div>

      <div class="reservation__field">
        <label for="reservation-time">Preferred time</label>
        <select id="reservation-time" name="time" required>
          <option value="">Choose a time</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>
      </div>

      <div class="reservation__field">
        <label for="reservation-guests">Guests</label>
        <select id="reservation-guests" name="guests" required>
          <option value="1">1 guest</option>
          <option value="2" selected>2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
          <option value="6">6 guests</option>
        </select>
      </div>

      <button class="reservation__submit" type="submit">
        Request a table
      </button>

      <p class="reservation__message" role="status"
        aria-live="polite"></p>
    </form>
  `;

  const form = block.querySelector('form');
  const dateInput = form.querySelector('[name="date"]');
  const message = block.querySelector('.reservation__message');

  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');

  dateInput.min = today;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = data.get('name').trim();

    message.textContent =
      `Thank you, ${name}! Your table request for ` +
      `${data.get('date')} at ${data.get('time')} for ` +
      `${data.get('guests')} guest(s) is ready. ` +
      'This is a demo confirmation, not a confirmed booking.';

    form.querySelector('[type="submit"]').textContent =
      'Request submitted';
  });
}
