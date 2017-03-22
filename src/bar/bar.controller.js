module.exports = function() {

    let vm = this;

    vm.simpleForm = null;
    vm.formOptions = {
        preventInvalidSubmit: true,
        preventDoubleSubmit: true,
        setFormDirtyOnSubmit: true,
        scrollToAndFocusFirstErrorOnSubmit: true,
        scrollAnimationTime: 500,
        scrollOffset: -100
    };
};