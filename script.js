function carregarTemaSalvo() {
    const mudarTema = document.getElementById("tema");
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo == "escuro") {
        mudarTema.checked = true;
    } else if (temaSalvo == "claro") {
        mudarTema.checked = false;
    }
    trocaDeTema();
}


function trocaDeTema() {
    const mudarTema = document.getElementById("tema");
    document.body.classList.toggle("dark", mudarTema.checked);

    const vetor = document.getElementById("vetor-header");
    const alvo = document.getElementById("alvo");
    if (mudarTema.checked) {
        vetor.src = "recursos/escuro/Vector.svg";
        alvo.src = "recursos/escuro/alvo_escuro.svg";
        seta_baixo.src = "recursos/escuro/seta_baixo_escuro.svg";
        sobre_mim_titulo.src = "recursos/escuro/SOBRE MIM_ESCURO.svg";
        fav.href = "recursos/favicon-32x32_escuro.png";
        cara_da_flecha.src = "recursos/escuro/cara_da_flecha_escuro.svg";
        habilidades_titulo.src = "recursos/escuro/HABILIDADES (1).svg";
        html_icon.src = "recursos/escuro/html_escuro.svg";
        css_icon.src = "recursos/escuro/css_escuro.svg";
        csharp_icon.src = "recursos/escuro/csharp_escuro.svg";
        figma_icon.src = "recursos/escuro/figma_escuro.svg";
        sql_icon.src = "recursos/escuro/sql_escuro.svg";
        js_icon.src = "recursos/escuro/js_escuro.svg";
        projetos_titulo.src = "recursos/escuro/projetos_escuro.svg";
        contato_titulo.src = "recursos/escuro/CONTATO.svg";
        localStorage.setItem("tema", "escuro");
    } else {
        vetor.src = "recursos/claro/Vector (1).svg";
        alvo.src = "recursos/claro/alvo.svg";
        seta_baixo.src = "recursos/claro/seta_baixo.svg";
        sobre_mim_titulo.src = "recursos/claro/SOBRE MIM.svg";
        fav.href = "recursos/favicon-32x32.png";
        cara_da_flecha.src = "recursos/claro/cara_da_flecha.svg";
        habilidades_titulo.src = "recursos/claro/HABILIDADES.svg";
        html_icon.src = "recursos/claro/html_claro.svg";
        css_icon.src = "recursos/claro/css_claro.svg";
        csharp_icon.src = "recursos/claro/csahrp_claro.svg";
        figma_icon.src = "recursos/claro/figma_claro.svg";
        sql_icon.src = "recursos/claro/sql_claro.svg";
        js_icon.src = "recursos/claro/js_claro.svg";
        projetos_titulo.src = "recursos/claro/projetos_claro.svg";
        contato_titulo.src = "recursos/claro/CONTATO.svg";
        localStorage.setItem("tema", "claro");
    }
}
window.addEventListener("load", carregarTemaSalvo);




window.addEventListener("blur", function(){
    document.title = "Volta aqui! :("
})

window.addEventListener("focus", function(){
    document.title = "Miguel Bernardo"
})




let typing=new Typed("#texto-rotativo", {
    strings: [
        "",
        "Desenvolvedor front-end",
        "UI/UX Designer e Developer",
        "Desenvolvedor Back-End",
        "Programador SQL"
    ],
    typeSpeed: 110,
    backSpeed: 35,
    loop: true,
})







function abrirModal(){
    const modal = document.getElementById("dialog");
    modal.showModal();
}
function fecharModal(){
    const modal = document.getElementById("dialog");
    modal.close();
}

function traduzirParaPT(){
    const modal = document.getElementById("dialog");
    modal.close();

    document.getElementById("t1").innerHTML = "Início";
    document.getElementById("t2").innerHTML = "Sobre";
    document.getElementById("t3").innerHTML = "Habilidades";
    document.getElementById("t4").innerHTML = "Projetos";
    document.getElementById("t5").innerHTML = "Contato";
    document.getElementById("baixar-curriculo").innerHTML = '<i class="fa-solid fa-download"></i>Currículo';
    document.getElementById("lingua").innerHTML = '<i class="fa-solid fa-language"></i>PT';
    document.getElementById("t7").innerHTML = "Prazer, sou";
    document.getElementById("t8").innerHTML = 'Eu sou: <span id="texto-rotativo"></span>';
    document.getElementById("t9").innerHTML = "Um pouco sobre mim e sobre o que gosto de fazer e quero construir";
    document.getElementById("t10").innerHTML = 'Sou Miguel Bernardo Dias Silva, tenho 17 anos e estudo no COTEMIG Floresta. Trabalho no desenvolvimento de sistemas, criando soluções focadas em C#, bancos de dados e web, conectando a teoria da sala de aula com projetos práticos. <br><br> Tenho o compromisso de encarar cada código com exatidão e atenção aos detalhes. Para mim, uma boa lógica e uma estrutura limpa se resolvem na mesma decisão. <br><br> No dia a dia, trabalho desenvolvendo aplicações com C#, modelando bancos de dados em MySQL, criando páginas com HTML e CSS e organizando processos com Google Workspace. O objetivo é sempre garantir que a estrutura por trás do sistema seja sólida e funcione sem complicações. <br><br> O que me move é resolver problemas reais usando tecnologia, buscando sempre o caminho mais simples e bem estruturado. Não é sobre tentar usar todas as ferramentas do mercado, mas sim sobre entregar algo que funcione de verdade e cumpra o seu papel.';
    document.getElementById("t11").innerHTML = '<i class="fa-solid fa-download"></i>Baixe meu currículo';
    document.getElementById("t12").innerHTML = "Um pouco sobre o que eu sei fazer";
    document.getElementById("t13").innerHTML = "Pensamento crítico";
    document.getElementById("t14").innerHTML = "Resolução de problemas";
    document.getElementById("t15").innerHTML = "Disciplina e  foco";
    document.getElementById("t16").innerHTML = "Atenção aos detalhes";
    document.getElementById("t17").innerHTML = "Proatividade";
    document.getElementById("t18").innerHTML = "Autonomia";
    document.getElementById("t19").innerHTML = "Inglês";
    document.getElementById("t20").innerHTML = "Facilidade de aprendizado";
    document.getElementById("t21").innerHTML = "Raciocínio lógico";
    document.getElementById("t22").innerHTML = "Um pouco sobre o que eu ja fiz";
    document.getElementById("t23").innerHTML = "Entre em contato comigo!";
    t24.placeholder = "Nome:";
    t25.placeholder = "Mensagem:";
    t26.placeholder = "ENVIAR";


   reporTextoRotativo([
        "",
        "Desenvolvedor front-end",
        "UI/UX Designer e Developer",
        "Desenvolvedor Back-End",
        "Programador SQL"
    ]);

}

function traduzirParaEN(){
    const modal = document.getElementById("dialog");
    modal.close();

    document.getElementById("t1").innerHTML = "Home";
    document.getElementById("t2").innerHTML = "About Me";
    document.getElementById("t3").innerHTML = "Abilities";
    document.getElementById("t4").innerHTML = "Projects";
    document.getElementById("t5").innerHTML = "Contact";
    document.getElementById("baixar-curriculo").innerHTML = '<i class="fa-solid fa-download"></i>Résumé';
    document.getElementById("lingua").innerHTML = '<i class="fa-solid fa-language"></i>EN';
    document.getElementById("t7").innerHTML = "Nice to meet you, I'm";
    document.getElementById("t8").innerHTML = 'I am: <span id="texto-rotativo"></span>';
    document.getElementById("t9").innerHTML = "A little bit about me, what I like to do and want to build";
    document.getElementById("t10").innerHTML = 'My name is Miguel Bernardo Dias Silva. I’m 17 years old and I’m a student at COTEMIG Floresta. I work in systems development, creating solutions focused on C#, databases, and the web, and connecting classroom theory with practical projects. <br><br> I’m committed to approaching every line of code with precision and attention to detail. For me, sound logic and a clean structure go hand in hand. <br><br> On a day-to-day basis, I develop applications using C#, model databases in MySQL, create web pages with HTML and CSS, and organize workflows with Google Workspace. The goal is always to ensure that the structure behind the system is solid and runs smoothly. <br><br> What drives me is solving real-world problems using technology, always seeking the simplest and best-structured approach. It’s not about trying to use every tool on the market, but rather about delivering something that truly works and fulfills its purpose.';
    document.getElementById("t11").innerHTML = '<i class="fa-solid fa-download"></i>Download my CV';
    document.getElementById("t12").innerHTML = "A little bit about what I can do";
    document.getElementById("t13").innerHTML = "critical thinking";
    document.getElementById("t14").innerHTML = "troubleshooting";
    document.getElementById("t15").innerHTML = "Focus and discipline";
    document.getElementById("t16").innerHTML = "Attention to details";
    document.getElementById("t17").innerHTML = "Proactivity";
    document.getElementById("t18").innerHTML = "Autonomy";
    document.getElementById("t19").innerHTML = "Portuguese";
    document.getElementById("t20").innerHTML = "ease of learning";
    document.getElementById("t21").innerHTML = "logical thinking";
    document.getElementById("t22").innerHTML = "A little bit about what I have done";
    document.getElementById("t23").innerHTML = "Get in touch with me!";
    t24.placeholder = "Name:";
    t25.placeholder = "Message:";
    t26.value = "SUBMIT";

    reporTextoRotativo([
        "",
        "Front-end Developer",
        "UI/UX Designer and Developer",
        "Back-End Developer",
        "SQL Programmer"
    ]);

}


function reporTextoRotativo(repor) {
    if (typing) {
        typing.destroy();
    }

    const verificar = document.getElementById("texto-rotativo");
    if (verificar) {
        verificar.innerHTML = "";
        typing = new Typed("#texto-rotativo", {
            strings: repor,
            typeSpeed: 110,
            backSpeed: 35,
            loop: true
        });
    }
}
