const articles = [
  {
    _id: "1",
    titre: "Pollution Industrielle",
    paragraphe: "",
    dateDeCreation: "",
    auteur: "MarTCM",
  },

  {
    _id: "2",
    titre: "Effet de serre",
    paragraphe:
      "Les deux tiers de l'énergie en provenance du soleil sont absorbés par l'atmosphère, les sols et l'océan. Le tiers restant est directement réfléchi vers l'espace par les nuages, les aérosols, l'atmosphère et la surface terrestre. Atmosphère et surface terrestre émettent en retour un rayonnement infrarouge que les nuages et les gaz à effet de serre (vapeur d'eau, dioxyde de carbone, ozone et méthane pour les plus importants) absorbent et réémettent en grande partie vers le sol.",
    dateDeCreation: "",
    auteur: "MarTCM",
  },

  {
    _id: "3",
    titre: "Pollution Nucléaire",
    paragraphe: "",
    dateDeCreation: "",
    auteur: "MarTCM",
  },

  {
    _id: "4",
    titre: "Effet de Covid-19 sur la nature",
    paragraphe: "",
    dateDeCreation: "",
    auteur: "MarTCM",
  },

  /*{
    _id: "5",
    titre: "",
    paragraphe: "",
    dateDeCreation: "",
    auteur: "",
  },*/
];

export function getArticles() {
  return articles;
}

export function getArticlesById(id) {
  return articles.find((m) => m._id === id);
}
