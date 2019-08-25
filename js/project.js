window.onload = function(){
    fillPjBg();
    hidePjGuides_top();
    hidePjGuides_right();
    hidePjGuides_left();
    
    
}

// change numbering fnc
changeNumber = (index) => {
    if (index < 10) {
        return "0" + index;
    } else {
        return index;
    }
}
    
// fill project bg
fillPjBg = () =>{
    const projects = document.querySelectorAll('.project');
    projects.forEach(function (e, index) {
        e.style.backgroundImage = "url('../_src/web/thumb" + changeNumber(index + 1) + ".png')";
    })
}

// hide roject guide on top
hidePjGuides_top = () =>{
    const projects = document.querySelectorAll('.project');
    let count = 0;
    projects.forEach(function (e) {
        if (count < 4) {
            const targets = e.querySelectorAll('.top');
            const targets_x2 = e.querySelectorAll('.top-line');
            
            targets.forEach(function (target) {
                target.style.display = "none";
            })
            targets_x2.forEach(function (target) {
                target.style.display = "none";
            })
            if(e.classList.contains('width_x2')){
                count++;
            }
        }
        count++;
    })
}

// hide project guide on right
hidePjGuides_right = () =>{
    const projects = document.querySelectorAll('.project');
    let count = 0;
    projects.forEach(function (e) {
        if(e.classList.contains('width_x2')){
            count++;
        }

        if (count % 4 == 3) {
            const targets = e.querySelectorAll('.right');
            
            targets.forEach(function (target) {
                target.style.display = "none";
            })
        }
        count++;
    })
}

hidePjGuides_left = () =>{
    const projects = document.querySelectorAll('.project');
    let count = 0;
    projects.forEach(function (e) {
        

        if (count % 4 == 0) {
            const targets = e.querySelectorAll('.left');
            
            targets.forEach(function (target) {
                target.style.display = "none";
            })
        }
        if(e.classList.contains('width_x2')){
            count++;
        }
        count++;
    })
}
