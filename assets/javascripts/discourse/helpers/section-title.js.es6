export default Ember.Helper.helper(function(params) {
  return I18n.t(`styleguide.sections.${params[0].replace(/\-/g, "_")}.title`);
});
