const toNumber = value => {
  if (!value) return 0;
  return parseFloat(value.substring(1), 10);
};

const retrieveXBoxOnePrice = () => {
  return cy
    .get(".panel-body > h3 + div + div + div > h3")
    .first()
    .invoke("text")
    .then(toNumber);
};

describe("Auctions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should decrease money for XBox One", () => {
    let currentValue = 0;

    retrieveXBoxOnePrice().then(value => {
      currentValue = value;

      expect(value).to.be.greaterThan(0);

      cy.wait(2000);

      retrieveXBoxOnePrice().then(value => {
        expect(value).to.be.lessThan(currentValue);
      });
    });
  });
});
