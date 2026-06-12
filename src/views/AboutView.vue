<template>
  <div class="about-wrapper">
    <div class="about-container">
      <div class="about-box">
        <h1>ESTADO DO SISTEMA MAGI</h1>
        <div class="info-content">
          <p><strong>UNIDADE:</strong> Supercomputador MAGI</p>
          <p><strong>STATUS:</strong> Operacional</p>
          <p><strong>NÚCLEOS:</strong> Balthasar, Casper, Melchior</p>
          <hr />
          <br>
          <p>Este sistema é a espinha dorsal da NERV, responsável por decisões complexas e gerenciamento das defesas da humanidade contra ameaças desconhecidas.</p>
          <p>Desenvolvido sob diretrizes da Dra. Naoko Akagi.</p>
          <br>
          <p>A Dra. Naoko Akagi implantou seus próprios padrões de pensamento graças ao Sistema Operacional de Transplante de Personalidade:
            <br>
              sua persona como mulher (Casper-Magi 3)
              <br>sua persona como mãe (Balthasar-Magi 2) 
              <br>
              e sua persona como cientista (Melchior-Magi 1). Após a conclusão do desenvolvimento do Magi e a subsequente morte de Naoko, o sistema foi transferido para a posse da NERV e é de supervisão de sua filha a Dra. Ritsuko Akagi</p>
          <br>
          <p>em algum momento após a sua conclusão, presumivelmente logo em seguida, a NERV começou a produzir réplicas dos Magi para suas instalações internacionais. Não está claro se esses Magi usam as mesmas personalidades dos originais ou se utilizam algum outro sistema.</p>
          <br>
          <p>- Magos 02: Matsushiro, Japão
            <br>
  - Magi 03: Berlim, Alemanha
  <br>- Magi 04: Massachusetts, EUA
  <br>- Magi 05: Hamburgo, Alemanha
  <br>- Magi 06: Pequim, China</p>
  <br>
          <p>Prevenção de danos e Beta Tester: Cadete Peixe</p>
        </div>
        <router-link to="/" class="back-btn">◀ RETORNAR AO TERMINAL</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Novo wrapper que aplica a imagem de fundo */
.about-wrapper {
  min-height: 100vh;
  width: 100%;
  background-image: url('/Magi_supercomputers.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #000;
}

.about-container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
}

.about-box {
  border: 2px solid #ff0000;
  padding: 25px;
  max-width: 700px;
  width: 100%;
  /* Fundo escuro com leve transparência para ver a imagem atrás */
  background: rgba(13, 13, 13, 0.9);
  color: #ff0000;
  font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
}

h1 { 
  border-bottom: 1px solid #ff0000; 
  padding-bottom: 10px; 
  font-size: 1.5rem;
}

.info-content { 
  margin: 20px 0; 
  line-height: 1.4;
}

.back-btn { 
  display: inline-block;
  margin-top: 20px;
  color: #ff0000;
  border: 1px solid #ff0000;
  padding: 8px 15px;
  text-decoration: none;
  font-size: 0.9rem;
}
</style>