const licenseCosts = [13, 22, 34];
var currentLicense = 0,
  total = 0,
  licenseSelected = false;

function licenseItemToggle() {
  $('.license__item').removeClass('license__item--active');
  this.classList.add('license__item--active');
  currentLicense = this.dataset.license;
  licenseQuantity = $('.license__count__select').val();
  total = licenseCosts[currentLicense - 1] * licenseQuantity;
  $('.license__footer__data').text(total);
  $('.license__footer__selected-plan-data').text(currentLicense);
  licenseSelected = true;
}

function licenseCountToggle() {
  if (licenseSelected) {
    licenseQuantity = $('.license__count__select').val();
    total = licenseCosts[currentLicense - 1] * licenseQuantity;
    $('.license__footer__data').text(total);
  }
}

$(document).ready(function () {
  $('.license__list__item').on('click', licenseItemToggle);
  $('.license__count__select').on('change', licenseCountToggle);
});
