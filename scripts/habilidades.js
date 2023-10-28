$(function() {
 const dataSkills = [
{
    skill: "HTML CSS",
    description: "O HTML define a estrutura e os elementos de um site, como texto, imagens e links, enquanto o CSS controla a aparência visual, como cores e layout, tornando a experiência do usuário atraente e consistente. Juntas, essas linguagens são essenciais para o desenvolvimento de sites eficazes.",
    incon: '<i class="fa-solid fa-file-code"></i>'
},
{
    skill: "ReactJs e TypeScript",
    description: "React e TypeScript são uma combinação poderosa para o desenvolvimento web, melhorando a segurança e a legibilidade do código em aplicativos interativos e responsivos.",
    incon: '<i class="fa-brands fa-react"></i>'
},
{
    skill: "JavaScript",
    description: "JavaScript (JS) é a linguagem de programação essencial para criar interatividade em sites, tornando-os dinâmicos e atraentes.",
    incon: '<i class="fa-brands fa-square-js"></i>'
},
{
    skill: "framework css",
    description: "Bootstrap é um framework com componentes e estilos predefinidos para desenvolvimento web eficiente. Tailwind CSS oferece flexibilidade com classes utilitárias personalizáveis para estilização direta no HTML. A escolha depende das necessidades do projeto.",
    incon: '<i class="fa-solid fa-book"></i>'
},
{
    skill: "git e github",
    description: "O Git é um sistema de controle de versão, enquanto o GitHub é uma plataforma de hospedagem de código que utiliza o Git para colaboração e gerenciamento de projetos de software.",
    incon: '<i class="fa-brands fa-square-git"></i>'
},
{
    skill: "NodeJs",
    description: "Node.js é uma plataforma que permite aos desenvolvedores usar JavaScript para criar aplicativos de servidor eficientes e escaláveis. É amplamente usado em desenvolvimento web para lidar com tarefas de servidor.",
    incon: '<i class="fa-brands fa-node-js"></i>'
},
{
    skill: "Banco de dados",
    description: "SQL é uma linguagem usada para gerenciar e acessar dados em bancos de dados. Ela é essencial em aplicativos que envolvem armazenamento de informações.",
    incon: '<i class="fa-solid fa-database"></i>'
},
{
    skill: "Linux",
    description: "Linux é um sistema operacional de código aberto conhecido por sua estabilidade e segurança, usado em servidores, desenvolvimento de software e dispositivos móveis. É mantido pela comunidade de software livre.",
    incon: '<i class="fa-brands fa-linux"></i>'
},
{
    skill: "Design",
    description: "Design é a criação de soluções visuais funcionais para a comunicação e interação, abrangendo áreas como design gráfico e design de produtos. Seu objetivo é melhorar a estética e a usabilidade.",
    incon: '<i class="fa-solid fa-pen-ruler"></i>'
},]
//Objeto

$.each(dataSkills, function(index, element) {
    $('.skills-group').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skills-group-cll').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skill-single').click(function() {
        $('.text-skill').html(`<h3>${element.skill}</h3>
        <p>${element.description}</p>`)
        $('.skill-single').css('color','#E8E7DF')
        $(this).css('color','#2e304e')
        $(this).break();
    })
  });
})
