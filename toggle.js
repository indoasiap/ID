//Toggle
function toggleClass(elem, theClass, newState) {
    var matchRegExp = new RegExp('(?:^|\\s)' + theClass + '(?!\\S)', 'g');
    var add=(arguments.length>2 ? newState : (elem.className.match(matchRegExp) == null));

    elem.className=elem.className.replace(matchRegExp, ''); // clear all
    if (add) elem.className += ' ' + theClass;
}

function toggle(id) {
    var elem = document.getElementById('INDOASIA');
//IND HEAD ACTIVE
    if (id=='HEADON') toggleClass(elem, 'active label-on', true);
    if (id=='SRCHON') toggleClass(elem, 'active', true);

    if (id=='HEADOFF') toggleClass(elem, 'active', false);
    
    if (id=='MENU600') toggleClass(elem, 'menu600');

//IND LABEL ACTIVE
    if (id=='LABELON') toggleClass(elem, 'label-on');
}
