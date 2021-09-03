// If scrolled to bottom, create print button
// window.onscroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         let main_div = document.querySelector('#main-div');
//         main_div.innerHTML +=`
//             <div id="print-button" class="w3-margin-right w3-margin-top w3-display-topright w3-display-hover w3-small " style="position: fixed;" >
//                 <button class="w3-button w3-blue w3-border w3-border-green w3-round-large" onclick="window.print()"><b>print</b></button>
//             </div>`
//     }else{
//         var myobj = document.querySelector("#print-button");
//         if ( myobj!==null && window.innerHeight + window.scrollY <= document.body.offsetHeight - 600) {
//             myobj.remove(); 
//         }
//     }
// };

function skills_contant(tag, data, flag){
    if(flag == 1){
        tag.innerHTML +=`
        <p >${data.lang}</p>
        <div class="w3-round-xlarge w3-tiny w3-gray w3-margin-bottom" >
            <div class="w3-container w3-center w3-round-xlarge w3-dark-gray" style="width:${data.known_persentge}">
                <div class="w3-center w3-text-white ">${data.known_persentge}</div>
                
                </div>
            </div>
        </div>`;
    }else{
        tag.innerHTML +=`
        <p >${data.lang}</p>
        </div>`;
    }  
}

function skills_tag(tag, icon, heading, class_name, data, flag){
    tag.innerHTML +=  ` 
        <p class="w3-large"><b><i class="fa ${icon} fa-fw w3-margin-right w3-text-teal"></i>${heading}</b></p>        
        <div class="w3-container zero-space">
            <div id="${class_name}-left" class="w3-col l6 m11 s11" style="padding-right: 16px;">
            </div>

            <div id="${class_name}-right" class="w3-col l6 m11 s11" style="padding-right: 16px;">
            </div>

        </div> 
        <hr>`;

    let left_div = document.querySelector('#'+class_name+'-left');
    let right_div = document.querySelector('#'+class_name+'-right');
    var i = 0;
    for (i = 0; i < data.length; i++){
        if( i % 2 == 0){
            skills_contant(left_div, data[i],flag);
        }else{
            skills_contant(right_div, data[i],flag);
        }
    }
}

function skills(){
    let left_column = document.querySelector('#left-coloumn');
    left_column.innerHTML +=  ` 
        <p class="w3-large"><h2><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></h2></p>
    `;

    var data_obj = JSON.parse(skills_data);

    skills_tag(left_column, "fa-code","Programming Languages","program-lang",data_obj.programming_languages, 1);
    skills_tag(left_column, "fa-database","Data-base Management","data-base",data_obj.data_management, 1);
    skills_tag(left_column, "fa-plus-circle","Additional Skills","additional-skills",data_obj.additional_skills, 1);
    skills_tag(left_column, "fa-terminal","Tools","tools",data_obj.tools, 0);
    skills_tag(left_column, "fa-desktop ","Operating System","operating-system",data_obj.operating_systems, 0);
    skills_tag(left_column, "fa-square","Boards","boards",data_obj.boards, 0);
}

function lang_contant(tag, data){
    tag.innerHTML +=`
    <p >${data.lang}</p>
    <div class="w3-round-xlarge w3-tiny w3-gray w3-margin-bottom">
        <div class="w3-center w3-round-xlarge w3-dark-gray" style="height:16px;width:${data.known_persentge}">
        </div>
    </div>`; 
}

function language(){
    let left_column = document.querySelector('#left-coloumn');
    left_column.innerHTML +=  ` 
        <p class="w3-large"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
        <div id="lang">
            <div class="w3-container zero-space">
                <div id="lang-left" class="w3-col l6 m11 s11" style="padding-right: 16px;">
                </div>

                <div id="lang-right" class="w3-col l6 m11 s11" style="padding-right: 16px;">
                </div>
            </div> 
        </div>
        <br>`;

    let lang_left_data_div = document.querySelector('#lang-left');
    let lang_right_data_div = document.querySelector('#lang-right');
    var data = JSON.parse(language_data);
    
    for (i = 0; i < data.language.length; i++){
        if( i % 2 == 0){
            lang_contant(lang_left_data_div, data.language[i]);
        }else{
            lang_contant(lang_right_data_div, data.language[i]);
        }
    }
}

function work(){
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

function education(){
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

function ecsprofessional() {
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
        
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${element.start_date} - ${element.end_date}</h6>
        <p>${element.brif}</p>
        <hr>
    `});
}

function certificates(){
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

function project_content(tag, data){
    data.projects.forEach(element => {
        tag.innerHTML += `
            <h5  class="w3-opacity"><b><i class="fa fa-star fa-fw w3-margin-right w3-large w3-text-blue"></i>${element.tittle}</b></h5>
            ${
                element.brif.map(function (brif) {
                    return `<p class="w3-margin-right"> <i class="fa fa-circle fa-fw w3-margin-right w3-tiny w3-text-blue"></i> &nbsp;&nbsp;${ brif }</p>`
                }).join("")
            }
            <hr>
    `});
}

function academic_projects(){
    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-snowflake-o fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Academic Projects</h2>
            <div id="academic-projects" class="w3-container">

            </div>
        </div>
    `;

    let acadimic_projects_data_div = document.querySelector('#academic-projects');
    var data = JSON.parse(academic_projects_data);

    project_content(acadimic_projects_data_div,data);
}

function projects(){

    let right_column = document.querySelector('#right-column');
    right_column.innerHTML +=  ` 
        <div class="w3-round-large w3-container w3-card grad-top-right-blue w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-tasks fa-fw w3-margin-right w3-xlarge w3-text-blue-grey"></i>Projects</h2>
            <div id="projects" class="w3-container">

            </div>
        </div>
    `;

    let projects_data_div = document.querySelector('#projects');
    var data = JSON.parse(projects_data);

    project_content(projects_data_div,data);
}



function load(){
    skills();
    language();
    work();
    education();
    ecsprofessional();
    certificates();
    projects();
    academic_projects();
}        

document.addEventListener('DOMContentLoaded', load);