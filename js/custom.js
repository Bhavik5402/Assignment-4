tab_1=document.getElementById("tab-1");
tab_2=document.getElementById("tab-2");
tab_3=document.getElementById("tab-3");
tab1_pane=document.getElementById("tab1-pane");
tab2_pane=document.getElementById("tab2-pane");
tab3_pane=document.getElementById("tab3-pane");


tab_1.addEventListener("click", function(){
    this.classList.add('active-link');
    tab_2.classList.remove('active-link');
    tab_3.classList.remove('active-link');
    tab1_pane.classList.add('active','show');
    tab2_pane.classList.remove('active','show');
    tab3_pane.classList.remove('active','show');
    
});
tab_2.addEventListener("click", function(){
    this.classList.add('active-link');
    tab_1.classList.remove('active-link');
    tab_3.classList.remove('active-link');
    tab1_pane.classList.remove('active','show');
    tab2_pane.classList.add('active','show');
    tab3_pane.classList.remove('active','show');
});
tab_3.addEventListener("click", function(){
    this.classList.add('active-link');
    tab_1.classList.remove('active-link');
    tab_2.classList.remove('active-link');
    tab1_pane.classList.remove('active','show');
    tab2_pane.classList.remove('active','show');
    tab3_pane.classList.add('active','show');
});


