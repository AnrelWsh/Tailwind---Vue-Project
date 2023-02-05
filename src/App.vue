<script setup>
  import Button from "./components/Button.vue";
  import HeaderNav from "./components/HeaderNav.vue";
  import PageNumber from "./components/PageNumber.vue";
  import Card from "./components/Card.vue";
  import FooterThemeTitle from"./components/FooterThemeTitle.vue";
  import FooterNav from"./components/FooterNav.vue";
  import SecondaryTitle from './components/SecondaryTitle.vue';
  import SocialNetwork from './components/SocialNetwork.vue';
  import FooterDropdown from './components/FooterDropdown.vue';
  

</script>

<template>
  <header class="text-white w-full h-[575px] sm:h-[464px] background">
    <img class="absolute sm:left-[104px] left-4 sm:top-[66px] top-[58px] sm:ml-0 ml-4" src="../public/img/logo1.png">
    <div class="absolute w-8 h-8 right-4 sm:hidden top-[58px] sm:mr-4 mr-4">
      <div class="w-7 h-1 mb-1.5 bg-white rounded-[2px]"></div>
      <div class="w-7 h-1 mb-1.5 bg-white rounded-[2px]"></div>
      <div class="w-5 h-1 mb-1.5 bg-white rounded-[2px]"></div>
    </div>
    
    <HeaderNav class="hidden sm:flex absolute left-[335px] top-[61px]" link1="Offres" link2="Formations" link3="Ressources" link4="A propos" />
    <div class="hidden sm:flex absolute top-10 right-[34px]  gap-6">
      <Button class="bg-grey" text="06 74 49 03 21" />
      <Button class="bg-white text-purple" text="Je prends contact" />
    </div>
    <div class="pt-[135px] sm:pt-[178px] text-center">
      <h1 class=" font-secondary_font tracking-[-0.015em] leading-[34px] text-[30px] sm:leading-[66px] sm:text-6xl sm:p-0 p-4">Découvrez nos formations sur étagère ! </h1>
      <p class="mt-[16px] sm:mt-6 w-[80%] sm:w-[60%] mx-auto">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    </div>
    <div class="relative flex sm:flex-row flex-col gap-[30px] whitespace-nowrap text-dark mx-auto py-8 px-6 sm:py-6 sm:px-8 w-[90%] sm:w-[78%] bg-white h-[200px] sm:h-[105px] rounded-[30px] mt-[50px] sm:mt-[75px]">
      <div class="text-right w-[100%] sm:w-[75%] flex justify-between items-center bg-light-pink rounded-full h-14 px-6 gap-0 sm:gap-4">
        <div class="sm:block hidden py-[17px] pr-4">
          <p class="text-base">Quelle formation recherchez-vous ?</p>
        </div>
        <div class="sm:hidden py-[17px]">
          <p class="text-base">Quelle formation recherch...</p>
        </div>
        <img class="relative float-right" src="../public/img/loupe.png">
      </div>
      <div class="text-right w-[100%] sm:w-[20%] flex justify-between items-center bg-light-pink rounded-full h-14 px-6 gap-4">
        <div class="py-[17px] pr-4">
          <p class="text-base">Filtrer</p>
        </div>
        <img class="w-[20px] text-dark relative float-right" src="../public/img/arrow-down.png">
      </div>
    </div>
  </header>

  <main class="pt-[142px] px-4 sm:px-20">

    <div class="secTitle sm:ml-0 ml-4">
      <SecondaryTitle title="Les plus populaires 🔥"/>
      <div class="secTitleArrow mb-[30px]">
        <img src="../public/img/arrow-left.png" alt="Arrow Left">
        <img src="../public/img/arrow-right.png" alt="Arrow Right">
      </div>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-[66px] justify-items-center">
      <Card cardImg="../public/img/c1.png" theme="Management & Leadership" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}, {}]"/>
      <Card cardImg="../public/img/c2.png" theme="vente" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c3.png" theme="RH, QVT & diversité" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}]"/>
      <Card cardImg="../public/img/c4.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}, {}]"/>
    </div>
    
    <SecondaryTitle class="mb-[30px] sm:ml-0 ml-4" title="Toutes les formations  🚀"/>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-[30px] justify-items-center">
      <Card cardImg="../public/img/c5.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}, {}]"/>
      <Card cardImg="../public/img/c6.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c7.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}, {}]"/>
      <Card cardImg="../public/img/c8.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>

      <Card cardImg="../public/img/c9.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}]"/>
      <Card cardImg="../public/img/c10.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c11.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c12.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>

      <Card cardImg="../public/img/c13.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}, {}]"/>
      <Card cardImg="../public/img/c14.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c15.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
      <Card cardImg="../public/img/c16.png" theme="thématique 1" title="Accueillir un.e collègue en situation de handicap" :items="[{}]"/>
    </div>
    <div class="flex items-center sm:justify-end sm:m-0 m-auto">
      <span class="text-orange text-2xl py-1 px-4 border-[3px] rounded-full mr-[10px]">1</span>
      <PageNumber textContent="2"/>
      <PageNumber textContent="3"/>
      <PageNumber textContent="4"/>
      <PageNumber textContent="..."/>
      <PageNumber textContent="8"/>
    </div>
    
    <div class="flex flex-col items-center bg-light-pink rounded-[20px] sm:mt-[92px] mt-[52px] mb-12 sm:mx-[238px] py-[42px] gap-7 mx-4">
      <div class="flex flex-col items-center sm:px-[219px] text-center gap-4 px-4">
        <h1 class=" font-secondary_font text-[30px] tracking-[-0.015em] leading-[34px] sm:block hidden text-dark ">C’est votre dernier mot ?</h1>
        <h1 class=" font-secondary_font text-[30px] tracking-[-0.015em] leading-[34px] textGradient sm:hidden">C’est votre dernier mot ?</h1>
        <MainText textContent="Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous."/>
      </div>

      <div class="flex sm:flex-row gap-6 flex-col w-full justify-center px-[22px] text-center">
        <Button class="bg-purple text-white p-[16px]" text="Je prends contact" />
        <div class="buttonGradient rounded-full">
          <Button class="text-center bg-light-pink p-6 text-dark" text="Télécharger le catalogue" />
        </div>
      </div>
    </div>

  </main>

  <footer>
    <div class="relative footer bg-dark pt-10 sm:pt-[112px] pl-0 sm:pl-20 sm:pb-[72px] pb-5 ">
      <img class="pl-4 sm:pl-0" src="../public/img/logo1.png" alt="Logo">
      <div class="footerLine2  pl-4 sm:pl-0 mt-[22px] mb-[30px] sm:mb-24">
        <p class="text-xs leading-[18px] mr-4 sm:mr-0 w-auto sm:w-[208px] text-white">Imagify est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
        <div class="footerNav">
          <div class="footerSolutions sm:block hidden ml-[60px] ">
            <FooterThemeTitle title="solutions"/>
            <FooterNav navContent="Développer les soft skills"/>
            <FooterNav navContent="Digitaliser les formations"/>
            <FooterNav navContent="Accompagner les déploiements"/>
          </div>
          <div class="footerFormations sm:block hidden ml-12">
            <FooterThemeTitle title="formations"/>
            <FooterNav navContent="Toutes les formations"/>
            <FooterNav navContent="Télécharger le catalogue"/>
          </div>
          <div class="footerInformations sm:block hidden ml-[142px]">
            <FooterThemeTitle title="informations"/>
            <FooterNav navContent="Nous rejoindre"/>
            <FooterNav navContent="Nous contacter"/>
            <FooterNav navContent="FAQ"/>
          </div>
        </div>
      </div>
      <div class="sm:hidden mb-[22px] w-full gap">
        <FooterDropdown dropdownTitle="solutions"/>
        <FooterDropdown dropdownTitle="formations"/>
        <FooterDropdown dropdownTitle="informations"/>
      </div>
      <div class="text-white footerLine3 w-full">
        <div class="pl-4 sm:gap-11 sm:pl-0 so flex sm:flex-row flex-col sm:items-end">
          <div class="flex flex-col">
            <FooterNav class="font-normal mb-1.5" navContent="©Imagify 2022"/>
            <p class="sm:block hidden mt-auto text-[10px] leading-[18px] text-white">Mentions légales  •  Politique de confidentialité  •  CGV</p>
          </div>
          <div class="sm:hidden">
            <p class="text-2 leading-10">Mentions légales<br>Politique de confidentialité<br>CGV<br></p>
          </div>

          <ul class="flex flex-row gap-[15px] sm:mx-0 self-center mt-[30px]">
            <SocialNetwork imageNetwork="../../public/img/insta.png"/>
            <SocialNetwork imageNetwork="../../public/img/linkedin.png"/>
            <SocialNetwork imageNetwork="../../public/img/unkn.png"/>
            <SocialNetwork imageNetwork="../../public/img/ytb.png"/>
          </ul>
          </div>
      </div>
    </div>

  </footer>

  
  
</template>

<style scoped>

</style>