const cards = [
  {
    front: 'The "First Computer Programmer"',
    back: "Ada Lovelace",
    flipped: false,
  },
  {
    front: 'Invented the "Clarke Calculator"',
    back: "Edith Clarke",
    flipped: false,
  },
  {
    front: "Famous World War II Enigma code breaker",
    back: "Alan Turing",
    flipped: false,
  },
  {
    front: "Created satellite orbit analyzation software for NASA",
    back: "Dr. Evelyn Boyd Granville",
    flipped: false,
  },
];

// animate card flip
// display an error message if fields are blank

new Vue({
  el: "#flashcard-app",
  data: {
    cards: cards,
    newFront: "",
    newBack: "",
    error: false,
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    createCard: function() {
      if (this.newFront && this.newBack) {
        const newCard = {
          front: this.newFront,
          back: this.newBack,
          flipped: false,
        };
        this.cards.push(newCard);
        this.error = false;
        this.newFront = "";
        this.newBack = "";
      } else {
        this.error = true;
      }
    },
    deleteCard: function(index) {
      this.cards.splice(index, 1);
    },
  },
});
