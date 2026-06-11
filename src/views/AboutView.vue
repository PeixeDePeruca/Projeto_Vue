<template>
  <div class="about-container">
    <h2>SOBRE O PROJETO // BASE DE DADOS DA NERV</h2>
    <hr class="divider" />
    
    <section class="project-info">
      <p>Este sistema é uma Single Page Application (SPA) desenvolvida com Vue 3 e Vite para a listagem e monitoramento tático de Unidades Evangelion e Entidades Biológicas Identificadas (Anjos).</p>
      <p>Interface construída em conformidade com as diretivas estéticas do Geofront de Neo Tokyo-3.</p>
    </section>

    <section class="team-section">
      <h3>DESENVOLVEDORES DO PROJETO</h3>
      <ul class="team-list">

        <li><strong>Luiz</strong> - Engenharia de Software</li>
        <li><strong>O Pai</strong> - Engenharia de Software</li>
        <li><strong>O Filho</strong> - Engenharia de Software</li>
        <li><strong>O Espírito Santo</strong> - Engenharia de Software</li>
    
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
.about-container {
  color: #ff5500;
  background-color: #050505;
  padding: 30px;
  border: 1px solid #ff5500;
}
h2, h3 {
  letter-spacing: 2px;
}
.divider {
  border: 0;
  border-top: 2px solid #ff5500;
  margin: 20px 0;
}
.project-info p {
  line-height: 1.6;
  margin-bottom: 15px;
}
.team-section {
  margin-top: 40px;
}
.team-list {
  list-style-type: square;
  padding-left: 20px;
}
.team-list li {
  margin: 10px 0;
  font-size: 16px;
}
</style>