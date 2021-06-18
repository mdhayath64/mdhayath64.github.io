// If scrolled to bottom, create print button
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        let main_div = document.querySelector('#main-div');
        main_div.innerHTML +=`
            <div id="print-button" class="w3-margin-right w3-margin-top w3-display-topright w3-display-hover w3-small " style="position: fixed;" >
                <button class="w3-button w3-blue w3-border w3-border-green w3-round-large" onclick="window.print()"><b>print</b></button>
            </div>`
    }else{
        var myobj = document.querySelector("#print-button");
        if ( myobj!==null && window.innerHeight + window.scrollY <= document.body.offsetHeight - 600) {
            myobj.remove(); 
        }
    }
};

function add_work(){
    
    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
      <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Work Experience</h2>
        <div id="work" class="w3-container">
          
        </div>  
      </div>
    `;

    let work_data_div = document.querySelector('#work');
    var obj = JSON.parse(work_data);

    obj.work.forEach(element => {
        work_data_div.innerHTML +=`
            <h5 class="w3-opacity"><b>${element.position } / ${element.company }</b></h5>
            <p >${element.location}</p>
            <h6 class="w3-text-teal">
            <i class="fa fa-calendar fa-fw w3-margin-right"></i>${element.start_data} - 
                ${element.end_data==='Current' ?  `<span class="w3-tag w3-teal w3-round">${element.end_data}</span></h6>`: 
                `${element.end_data}</span></h6>`}
        <p>${element.role}</p>
        <hr>`;
    });
}

function add_education(){
    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">

        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-graduation-cap fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Education</h2>
        <div id="education" class="w3-container">

        </div>
        </div>
    `;

    let education_data_div = document.querySelector('#education');
    var obj = JSON.parse(education_data);
    
    obj.education.forEach(element => {
      education_data_div.innerHTML += `
          <h5 class="w3-opacity"><b>${element.course}</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${element.start} - ${element.end}</h6>
          <h5 class="zero-space w3-text-gray"><b>${element.college}</b></h5>
          <p >${element.location}</p>
          <hr>
    `});
}

function add_Esprofessional() {
    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">     
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-building fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Esprofessional</h2>
            <div id="esprofessional" class="w3-container">   

            </div>    
        </div>
    `;

    let esprofessional_data_div = document.querySelector('#esprofessional');
    var obj = JSON.parse(esprofessional_data);  

    obj.esprofessional.forEach(element => {
        esprofessional_data_div.innerHTML += `
        <h5 class="w3-opacity"><b>
            ${element.position!==null ?  `${element.position} / ${element.company}`: 
            element.company}
        </b></h5>
        <p>${element.location}</p>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${element.start} - ${element.end}</h6>
        <p>${element.brif}</p>
        <hr>
    `});
}

function add_certificates(){
    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Certificates</h2>
            <div id="certificates" class="w3-container">

            </div>
        </div>
    `;

    let certificates_data_div = document.querySelector('#certificates');
    var obj = JSON.parse(certificates_data);  

    obj.certificates.forEach(element => {
        certificates_data_div.innerHTML += `
            <h5 class="w3-opacity"><b>${element.certificate}</b></h5>
            <p>${element.brif}</p>
            <hr>
    `});
}

function add_projects(){

    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-tasks fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Projects</h2>
            <div id="projects" class="w3-container">

            </div>
        </div>
    `;

    let projects_data_div = document.querySelector('#projects');
    var obj = JSON.parse(projects_data);
    //var obj1 = JSON.parse(my_data.projects.brif);  

    obj.projects.forEach(element => {
        projects_data_div.innerHTML += `
            <h5  class="w3-opacity"><b><i class="fa fa-star fa-fw w3-margin-right w3-large w3-text-blue"></i>${element.tittle}</b></h5>
            ${

                element.brif.map(function (brif) {
                    return `<p class="w3-margin-right"> <i class="fa fa-circle fa-fw w3-margin-right w3-tiny w3-text-blue"></i> &nbsp;&nbsp;${ brif }</p>`
                }).join("")
            }
            <hr>
    `});
}

function load(){
  add_work();
  add_education();
  add_Esprofessional();
  add_certificates();
  add_projects();
}        

document.addEventListener('DOMContentLoaded', load);