
export default function decorate(block) {
  const dishes = [
    {
      name: 'Signature Biryani',
      description: 'Fragrant basmati rice layered with aromatic Indian spices.',
      extraDescription:
        'Our signature biryani brings together long-grain basmati rice, warming spices, fresh herbs and a rich aroma. Every serving is prepared to deliver a comforting and flavourful Indian dining experience.',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80',
      alt: 'Aromatic Indian biryani rice',
    },
    {
      name: 'Paneer Tikka',
      description: 'Marinated paneer grilled with peppers and traditional spices.',
      extraDescription:
        'Soft cubes of paneer are coated in a spiced yoghurt marinade, then grilled with peppers for a smoky finish. A delicious starter for anyone who enjoys classic Indian flavours.',
      price: '₹240',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80',
      alt: 'Grilled Indian tikka',
    },
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato curry with traditional Indian spices.',
      extraDescription:
        'Tender chicken is served in a velvety tomato-based gravy with a balanced blend of spices. Enjoy it with steamed rice, butter naan or garlic naan for a satisfying meal.',
      price: '₹320',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80',
      alt: 'Indian curry served in a bowl',
    },
    {
      name: 'Garlic Naan',
      description: 'Soft Indian bread topped with garlic and butter.',
      extraDescription:
        'Freshly prepared naan is baked until soft with lightly crisp edges, then finished with garlic and butter. It is a perfect accompaniment to rich curries and flavourful gravies.',
      price: '₹60',
      image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=700&q=80',
      alt: 'Indian flatbread',
    },
  ];

  block.replaceChildren();

  const heading = document.createElement('h2');
  heading.textContent = 'Our Signature Menu';
  block.append(heading);

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  dishes.forEach((dish, index) => {
    const card = document.createElement('article');
    card.className = 'menu-card';

    const image = document.createElement('img');
    image.className = 'menu-card__image';
    image.src = dish.image;
    image.alt = dish.alt;
    image.loading = 'lazy';

    const name = document.createElement('h3');
    name.textContent = dish.name;

    const description = document.createElement('p');
    description.textContent = dish.description;

    const extra = document.createElement('p');
    extra.className = 'menu-card__extra';
    extra.id = `menu-extra-${index}`;
    extra.textContent = dish.extraDescription;
    extra.hidden = true;

    const readMore = document.createElement('button');
    readMore.className = 'menu-card__read-more';
    readMore.type = 'button';
    readMore.textContent = 'Read More';
    readMore.setAttribute('aria-expanded', 'false');
    readMore.setAttribute('aria-controls', extra.id);

    readMore.addEventListener('click', () => {
      const isExpanded = readMore.getAttribute('aria-expanded') === 'true';
      extra.hidden = isExpanded;
      readMore.setAttribute('aria-expanded', String(!isExpanded));
      readMore.textContent = isExpanded ? 'Read More' : 'Read Less';
    });

    const price = document.createElement('p');
    price.className = 'menu-price';
    price.textContent = dish.price;

    card.append(image, name, description, readMore, extra, price);
    grid.append(card);
  });

  block.append(grid);
}
