$(document).ready(function () {
  const mp4Files = [
    "LOL_101.mp4",
    "LOL_102.mp4",
    "LOL_103.mp4",
    "LOL_104.mp4",
    "LOL_105.mp4",
    "LOL_106.mp4",
  ];

  const imageData = {
    LOL_101: {
      amazon: ["image1.jpg", "image2.jpg", "image3.jpg"],
      itv: ["image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"],
      netflix: ["image8.jpg", "image9.jpg", "image10.jpg"],
    },
    LOL_102: {
      amazon: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
      itv: ["image5.jpg", "image6.jpg"],
      netflix: ["image7.jpg", "image8.jpg"],
    },
    LOL_103: {
      amazon: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
      itv: ["image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"],
      netflix: ["image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"],
    },
    LOL_104: {
      amazon: ["image1.jpg", "image2.jpg", "image3.jpg"],
      itv: ["image4.jpg", "image5.jpg", "image6.jpg"],
      netflix: ["image7.jpg", "image8.jpg", "image9.jpg"],
    },
    LOL_105: {
      amazon: ["image1.jpg", "image2.jpg", "image3.jpg"],
      itv: ["image4.jpg", "image5.jpg", "image6.jpg"],
      netflix: ["image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"],
    },
    LOL_106: {
      amazon: ["image1.jpg", "image2.jpg"],
      itv: ["image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"],
      netflix: ["image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"],
    },
  };

  const synopsisData = {
    LOL_101: {
      amazon: {
        portuguese:
          "No episódio de estreia de 'Last One Laughing: Ireland', dez dos melhores comediantes da Irlanda ficam trancados em uma sala por seis horas com uma missão: fazer os outros rirem sem dar risada. Sob o olhar atento de um anfitrião, os comediantes usam seus estilos e truques únicos para superar os colegas, todos de olho no título de primeiro campeão LOL da Irlanda e um prêmio de €50.000 para caridade. Com a tensão aumentando, alianças se formam e estratégias surgem, preparando o palco para um confronto cômico sem igual.",
        english:
          "In the premiere episode of 'Last One Laughing: Ireland' ten of Ireland's top comedians are locked in a room for six hours with a singular mission: make each other laugh without cracking a smile themselves. Hosted by a watchful eye, the comedians employ their unique styles and antics to outwit their peers, all vying for the title of Ireland's first LOL champion and a €50,000 prize for charity. As the tension builds, alliances form and strategies unfold, setting the stage for a comedic showdown like no other.",
      },
      itv: {
        portuguese:
          "Entre na diversão em 'Last One Laughing: Ireland', onde dez dos comediantes mais engraçados do país enfrentam o teste definitivo: fazer os outros rirem sem rir. Sob o olhar atento do anfitrião, os comediantes navegam por um campo minado de humor, usando suas melhores piadas e truques para superar os concorrentes. Com um prêmio de €50.000 para caridade em jogo, a pressão é grande neste concurso hilário de resistência cômica. Quem sairá vitorioso neste desafio único de comédia irlandesa?",
        english:
          "Join the laughter in 'Last One Laughing: Ireland' where ten of the nation's funniest comedians are put to the ultimate test: make others laugh without laughing themselves. Under the watchful eye of the host, the comedians navigate a minefield of humor, employing their best jokes and tricks to outlast their competitors. With a €50,000 prize for charity at stake, the pressure is on in this side-splitting contest of comedic endurance. Who will emerge victorious in this unique Irish comedy challenge?",
      },
      netflix: {
        portuguese:
          "'Last One Laughing: Ireland' começa com uma reviravolta hilária, onde dez comediantes são desafiados a manter a cara séria enquanto tentam fazer seus colegas rirem. Com um prêmio de €50.000 para caridade em jogo, as apostas são altas e as risadas ainda maiores. À medida que as horas passam, os comediantes fazem de tudo, desde travessuras escandalosas até tiradas inteligentes, em uma batalha de sagacidade e humor. Quem será o último a permanecer de pé nesta competição de comédia divertida?",
        english:
          "'Last One Laughing: Ireland' kicks off with a hilarious twist as ten comedians are challenged to keep a straight face while trying to make their fellow contestants laugh. With a €50,000 charity prize on the line, the stakes are high, and the laughs are even higher. As the hours tick by, the comedians pull out all the stops, from outrageous antics to clever quips, in a battle of wits and humor. Who will be the last one standing in this uproarious comedy competition?",
      },
    },
    LOL_102: {
      amazon: {
        portuguese:
          "Neste episódio de 'Last One Laughing: Ireland', o caos cômico continua enquanto os participantes enfrentam desafios inesperados e situações hilárias. Com cartões amarelos e vermelhos à espreita, a pressão aumenta à medida que os comediantes se esforçam para manter a compostura. Participações especiais e surpresas aumentam a tensão, enquanto histórias pessoais e momentos emocionantes revelam o lado humano dos competidores. À medida que as risadas e o drama se desenrolam, quem conseguirá permanecer no jogo e quem sucumbirá à pressão?",
        english:
          "In this episode of 'Last One Laughing: Ireland' the comedic chaos continues as the contestants face unexpected challenges and hilarious mishaps. With yellow and red cards looming, the pressure mounts as the comedians strive to keep their composure. Special appearances and surprise antics add to the tension, while personal stories and heartfelt moments reveal the human side of the competitors. As the laughter and drama unfold, who will manage to stay in the game and who will crack under the pressure?",
      },
      itv: {
        portuguese:
          "Entre na diversão em 'Last One Laughing: Ireland', onde os comediantes enfrentam uma série de desafios cômicos e surpresas inesperadas. Com cartões amarelos e vermelhos em jogo, a pressão é grande para manter a compostura em meio ao caos. Participações especiais e momentos emocionantes adicionam camadas às risadas, revelando o lado pessoal dos participantes. À medida que o episódio avança, os comediantes devem navegar na linha tênue entre humor e estratégia. Quem manterá a calma e quem sucumbirá às risadas?",
        english:
          "Join the hilarity in 'Last One Laughing: Ireland' as the comedians face a series of comedic challenges and unexpected surprises. With yellow and red cards at play, the pressure is on to maintain composure amidst the chaos. Special appearances and heartfelt moments add layers to the laughter, revealing the personal side of the contestants. As the episode progresses, the comedians must navigate the fine line between humor and strategy. Who will hold their nerve and who will fall victim to the laughter?",
      },
      netflix: {
        portuguese:
          "A batalha de risadas se intensifica em 'Last One Laughing: Ireland', enquanto os comediantes navegam por um campo minado de humor e reviravoltas inesperadas. Com a ameaça de cartões amarelos e vermelhos, as apostas estão mais altas do que nunca. Convidados especiais e surpresas mantêm os participantes atentos, enquanto revelações pessoais adicionam profundidade ao caos cômico. À medida que o episódio se desenrola, os comediantes devem equilibrar humor e estratégia para evitar a eliminação. Quem sairá ileso deste confronto cômico?",
        english:
          "The laughter battle intensifies in 'Last One Laughing: Ireland' as the comedians navigate a minefield of humor and unexpected twists. With the threat of yellow and red cards, the stakes are higher than ever. Special guests and surprise antics keep the contestants on their toes, while personal revelations add depth to the comedic chaos. As the episode unfolds, the comedians must balance humor and strategy to avoid elimination. Who will emerge unscathed in this comedic showdown?",
      },
    },
    LOL_103: {
      amazon: {
        portuguese:
          "Neste episódio de 'Last One Laughing', os comediantes são levados ao limite enquanto enfrentam uma série de desafios hilários e inesperados. De uma falsa emergência médica a uma apresentação surpresa de um 'gato sexy', os participantes devem manter a compostura para evitar a eliminação. Com cada ato mais escandaloso que o anterior, a pressão aumenta e a risada está a um passo. Quem sucumbirá ao caos cômico?",
        english:
          "In this episode of 'Last One Laughing' the comedians are pushed to their limits as they navigate a series of hilarious and unexpected challenges. From a faux medical emergency to a surprise performance by a 'sexy cat' the contestants must keep their composure to avoid elimination. With each act more outrageous than the last, the pressure mounts, and laughter is just a breath away. Who will crack under the comedic chaos?",
      },
      itv: {
        portuguese:
          "Entre no campo de batalha repleto de risadas de 'Last One Laughing', onde comediantes competem para manter a cara séria em meio a uma tempestade de hilaridade. Neste episódio, os participantes enfrentam um drama médico simulado e uma inesperada apresentação de 'gato sexy'. À medida que as travessuras aumentam, o desafio é permanecer impassível. Quem manterá a calma e quem será o primeiro a cair neste confronto cômico?",
        english:
          "Join the laughter-filled battleground of 'Last One Laughing' where comedians compete to keep a straight face amidst a storm of hilarity. This episode sees the contestants dealing with a mock medical drama and an unexpected 'sexy cat' act. As the antics escalate, the challenge is to remain unfazed. Who will hold their nerve and who will be the first to fall in this comedic showdown?",
      },
      netflix: {
        portuguese:
          "Mergulhe no caos cômico de 'Last One Laughing', onde um grupo de comediantes se enfrenta em um desafio de não rir. Este episódio apresenta uma enxurrada de travessuras, incluindo um incidente médico encenado e uma apresentação surpresa de 'gato sexy'. À medida que a tensão aumenta, os participantes devem resistir à vontade de rir ou correm o risco de serem eliminados. É um teste de resistência e humor, onde apenas os mais estoicos sobreviverão.",
        english:
          "Dive into the comedic chaos of 'Last One Laughing' where a group of comedians face off in a no-laugh challenge. This episode features a whirlwind of antics, including a staged medical mishap and a surprise 'sexy cat' performance. As the tension builds, the contestants must resist the urge to laugh, or risk being eliminated. It's a test of endurance and humor, where only the most stoic will survive.",
      },
    },
    LOL_104: {
      amazon: {
        portuguese:
          "Neste episódio de 'Last One Laughing', o caos cômico continua enquanto os participantes se enfrentam em uma série de desafios absurdos e imprevisíveis. De uma transformação em sereia a uma esquete familiar bizarra, os comediantes ultrapassam os limites do humor enquanto tentam manter a compostura. À medida que as travessuras aumentam, a pressão para evitar risadas se intensifica, levando a eliminações inesperadas. Quem conseguirá manter a cara séria em meio à hilaridade?",
        english:
          "In this episode of 'Last One Laughing' the comedic chaos continues as the contestants face off in a series of absurd and unpredictable challenges. From a mermaid transformation to a bizarre family skit, the comedians push the boundaries of humor while trying to maintain their composure. As the antics escalate, the pressure to avoid laughter intensifies, leading to unexpected eliminations. Who will manage to keep a straight face amidst the hilarity?",
      },
      itv: {
        portuguese:
          "Entre na arena repleta de risadas de 'Last One Laughing', onde comediantes competem para manter a cara séria em meio a uma enxurrada de humor. Neste episódio, os participantes enfrentam uma transformação em sereia, um ato familiar peculiar e mais. À medida que as travessuras se desenrolam, o desafio é permanecer impassível. Quem manterá a calma e quem será o primeiro a cair neste confronto cômico?",
        english:
          "Join the laughter-filled arena of 'Last One Laughing' where comedians compete to keep a straight face amidst a whirlwind of humor. This episode sees the contestants tackling a mermaid transformation, a peculiar family act, and more. As the antics unfold, the challenge is to remain unfazed. Who will hold their nerve and who will be the first to fall in this comedic showdown?",
      },
      netflix: {
        portuguese:
          "Prepare-se para mais uma rodada de risadas em 'Last One Laughing', onde comediantes lutam para manter a calma diante de travessuras escandalosas. Este episódio apresenta um ato de sereia, uma esquete familiar peculiar e uma série de desafios que provocam risadas. À medida que a tensão aumenta, os participantes devem resistir à vontade de rir ou correm o risco de serem eliminados. É um teste de resistência e humor, onde apenas os mais estoicos sobreviverão à tempestade cômica.",
        english:
          "Get ready for another round of hilarity in 'Last One Laughing' where comedians battle to keep their cool in the face of outrageous antics. This episode features a mermaid act, a quirky family sketch, and a series of laugh-inducing challenges. As the tension rises, the contestants must resist the urge to laugh or risk elimination. It's a test of endurance and humor, where only the most stoic will survive the comedic storm.",
      },
    },
    LOL_105: {
      amazon: {
        portuguese:
          "Neste episódio de 'Last One Laughing', os comediantes são lançados em um turbilhão de absurdos enquanto se enfrentam em uma série de desafios imprevisíveis. De um burro falante a uma apresentação musical surpresa, os participantes devem navegar pelo caos mantendo a compostura. À medida que as travessuras aumentam, alianças são testadas e eliminações inesperadas ocorrem. Quem conseguirá manter a cara séria em meio à hilaridade e quem será o próximo a sucumbir?",
        english:
          "In this episode of 'Last One Laughing' the comedians are thrown into a whirlwind of absurdity as they face off in a series of unpredictable challenges. From a talking donkey to a surprise musical performance, the contestants must navigate the chaos while keeping their composure. As the antics escalate, alliances are tested, and unexpected eliminations occur. Who will manage to keep a straight face amidst the hilarity and who will be the next to crack?",
      },
      itv: {
        portuguese:
          "Entre na arena repleta de risadas de 'Last One Laughing', onde comediantes competem para manter a cara séria em meio a uma enxurrada de humor. Neste episódio, os participantes enfrentam um burro falante, uma apresentação musical surpresa e mais. À medida que as travessuras se desenrolam, o desafio é permanecer impassível. Quem manterá a calma e quem será o primeiro a cair neste confronto cômico?",
        english:
          "Step into the laughter-filled arena of 'Last One Laughing' where comedians compete to keep a straight face amidst a whirlwind of humor. This episode sees the contestants tackling a talking donkey, a surprise musical performance, and more. As the antics unfold, the challenge is to remain unfazed. Who will hold their nerve and who will be the first to fall in this comedic showdown?",
      },
      netflix: {
        portuguese:
          "Prepare-se para mais uma rodada de caos cômico em 'Last One Laughing', onde os participantes são levados ao limite com uma série de desafios escandalosos. Este episódio apresenta um burro falante, um número musical surpresa e uma série de travessuras imprevisíveis. À medida que a pressão aumenta, os comediantes devem resistir à vontade de rir ou correm o risco de serem eliminados. É um teste de resistência e humor, onde apenas os mais estoicos sobreviverão à tempestade cômica.",
        english:
          "Prepare for another round of comedic chaos in 'Last One Laughing' where the contestants are pushed to their limits with a series of outrageous challenges. This episode features a talking donkey, a surprise musical act, and a host of unpredictable antics. As the pressure mounts, the comedians must resist the urge to laugh or risk elimination. It's a test of endurance and humor, where only the most stoic will survive the comedic storm.",
      },
    },
    LOL_106: {
      amazon: {
        portuguese:
          "No emocionante final de 'Last One Laughing', a tensão atinge seu ápice enquanto os comediantes restantes lutam pelo prêmio máximo. Com apenas 30 minutos para garantir uma risada, a pressão é intensa. Travessuras inesperadas, um visitante surpresa e uma competição de encarar de alto risco levam os participantes ao limite. Quem sairá vitorioso e conquistará o título de último a rir?",
        english:
          "In the thrilling finale of 'Last One Laughing' the tension reaches its peak as the remaining comedians battle it out for the ultimate prize. With only 30 minutes to secure a laugh, the pressure is on. Unexpected antics, a surprise visitor, and a high-stakes staring contest push the contestants to their limits. Who will emerge victorious and claim the title of the last one laughing?",
      },
      itv: {
        portuguese:
          "Em uma conclusão emocionante de 'Last One Laughing', os finalistas se enfrentam em um duelo cômico para a história. Com apenas 30 minutos para garantir uma risada, a pressão é imensa. De aparições surpresa a uma tensa competição de encarar, o episódio está repleto de reviravoltas inesperadas. Quando a poeira baixar, um comediante sairá vitorioso. Assista para ver quem levará a coroa!",
        english:
          "In a gripping conclusion to 'Last One Laughing' the final contestants face off in a comedic duel for the ages. With just 30 minutes to secure a laugh, the pressure is immense. From surprise appearances to a tense staring contest, the episode is packed with unexpected twists. As the dust settles, one comedian will stand victorious. Tune in to see who claims the crown!",
      },
      netflix: {
        portuguese:
          "O confronto final de 'Last One Laughing' chegou, e as apostas nunca foram tão altas. Com o tempo se esgotando, os comediantes fazem de tudo para fazer os outros rirem. Com convidados surpresa e uma competição de encarar de tirar o fôlego, a tensão é palpável. É uma batalha de inteligência e humor, onde apenas um pode ser coroado vencedor. Quem será?",
        english:
          "The final showdown of 'Last One Laughing' is here, and the stakes have never been higher. As the clock ticks down, the comedians pull out all the stops to make each other laugh. With surprise guests and a nail-biting staring contest, the tension is palpable. It's a battle of wits and humor, where only one can be crowned the winner. Who will it be?",
      },
    },
  };

  // JUST DEFINING THE COMPONENTS
  const $formDashboard = $(".form-dashboard");
  const $selectContent = $("#step-content");
  const $selectDistribution = $("#step-distribution");
  const $selectArtifactType = $("#step-artifact-type");
  const $selectSynopsisLanguage = $("#step-synopsis-language");
  const $distributionRow = $("#distribution-row");
  const $artifactTypeRow = $("#artifact-type");
  const $synopsisLanguageRow = $("#synopsis-language");
  const $videoPreview = $("#video-preview");
  const $synopsisDisplay = $("#synopsis-display");
  const $loader = $("#loader");
  const $gallerySection = $(".gallery-section");
  const $gallery = $("#image-gallery");
  const $imagePreview = $("#image-preview");
  const $downloadButton = $("#download-button");

  // HIDDIN COMPONENTS THAT NEED TO BE SHOWN LATER
  $distributionRow.hide();
  $artifactTypeRow.hide();
  $synopsisLanguageRow.hide();
  $gallerySection.hide();
  $synopsisDisplay.hide();
  $imagePreview.hide();

  $formDashboard.fadeIn("slow");

  /**
   * =======================================================
   * CHOOSE VIDEO TO BE PREVIEWD LOGIC START
   * =======================================================
   */
  mp4Files.forEach((file) => {
    $selectContent.append(new Option(file, file));
  });

  $selectContent.change(function () {
    const selectedFile = $(this).val();
    if (selectedFile) {
      $videoPreview.html(`<video controls>
                            <source src="possible_inputs/${selectedFile}" type="video/mp4">
                            Your browser does not support the video tag.
                           </video>`);
      $distributionRow.fadeIn();
      $artifactTypeRow.fadeIn();
    } else {
      $videoPreview.empty();
      $distributionRow.fadeOut();
      $artifactTypeRow.fadeOut();
      $synopsisLanguageRow.fadeOut();
      $gallerySection.hide();
      $synopsisDisplay.hide();
      $imagePreview.hide();
    }
  });
  /**
   * =======================================================
   * CHOOSE VIDEO TO BE PREVIEWD LOGIC END
   * =======================================================
   */

  /**
   * ===================================================================
   * GALLERY LOGIC START
   * ===================================================================
   */
  $selectArtifactType.change(handleArtifactTypeChange);
  $selectDistribution
    .add($selectContent)
    .change(handleContentOrDistributionChange);

  function handleArtifactTypeChange() {
    const selectedType = $selectArtifactType.val();
    if (selectedType === "Imagery") {
      loadContentAndDistribution();
      $synopsisLanguageRow.fadeOut();
      $synopsisDisplay.hide();
    } else if (selectedType === "Synopsis") {
      $synopsisLanguageRow.fadeIn();
      $gallerySection.hide();
      $imagePreview.hide();
    }
  }

  function handleContentOrDistributionChange() {
    const selectedType = $selectArtifactType.val();
    if (selectedType === "Imagery") {
      loadContentAndDistribution();
    } else if (selectedType === "Synopsis") {
      const content = $selectContent.val().replace(".mp4", "");
      const distribution = $selectDistribution.val().toLowerCase();
      const language = $selectSynopsisLanguage.val().toLowerCase();
      if (content && distribution && language) {
        showLoader();
        setTimeout(() => {
          displaySynopsis(content, distribution, language);
          hideLoader();
        }, 1000); // Simulate loading time
      }
    }
    $downloadButton.prop("disabled", true); // Disable the button
  }

  function loadContentAndDistribution() {
    const content = $selectContent.val();
    const distribution = $selectDistribution.val();
    if (content && distribution) {
      showLoader();
      setTimeout(() => {
        loadImages(content.replace(".mp4", ""), distribution.toLowerCase());
        hideLoader();
      }, 1000); // Simulate loading time
    }
  }

  function loadImages(contentKey, distributionKey) {
    const images = imageData[contentKey][distributionKey];

    if (!images) {
      console.error("No images found for this content and distribution.");
      return;
    }

    $gallery.empty();
    $imagePreview.hide();

    images.forEach((image, index) => {
      const imgElement = `<div>
        <input type="checkbox" id="img-${index}" class="image-checkbox">
        <label for="img-${index}">
          <img src="possible_assets/${contentKey}/${distributionKey}/${image}" class="gallery-image" alt="...">
        </label>
      </div>`;
      $gallery.append(imgElement);
    });

    $(".gallery-image").click(function (e) {
      e.preventDefault(); // Prevent checkbox from being checked
      $(".gallery-image").removeClass("selected-image"); // Remove highlight from all images
      $(this).addClass("selected-image"); // Highlight the clicked image
      const src = $(this).attr("src");
      $imagePreview.html(`<img src="${src}" alt="Preview">`).fadeIn();
    });

    $(".image-checkbox").change(function () {
      const anyChecked = $(".image-checkbox:checked").length > 0;
      $downloadButton.prop("disabled", !anyChecked);
    });

    $gallerySection.fadeIn();
  }

  $downloadButton.click(function () {
    const selectedImages = $(".image-checkbox:checked")
      .map(function () {
        return $(this).next("label").find("img").attr("src");
      })
      .get();

    if (selectedImages.length === 1) {
      downloadSingleImage(selectedImages[0]);
    } else if (selectedImages.length > 1) {
      downloadMultipleImages(selectedImages);
    }
  });

  function downloadSingleImage(src) {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadMultipleImages(selectedImages) {
    const zip = new JSZip();
    const folder = zip.folder("images");

    const promises = selectedImages.map((src) => {
      return fetch(src)
        .then((response) => response.blob())
        .then((blob) => {
          const filename = src.split("/").pop();
          folder.file(filename, blob);
        });
    });

    Promise.all(promises).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "images.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  }
  /**
   * ===================================================================
   * GALLERY LOGIC END
   * ===================================================================
   */

  /**
   * ===================================================================
   * SYNOPSIS LOGIC START
   * ===================================================================
   */
  $selectSynopsisLanguage.change(function () {
    const selectedType = $selectArtifactType.val();
    if (selectedType === "Synopsis") {
      const content = $selectContent.val().replace(".mp4", "");
      const distribution = $selectDistribution.val().toLowerCase();
      const language = $(this).val().toLowerCase();
      if (content && distribution && language) {
        showLoader();
        setTimeout(() => {
          displaySynopsis(content, distribution, language);
          hideLoader();
        }, 1000); // Simulate loading time
      }
    }
  });

  function typeTextEffect(element, text) {
    const chars = text.split("");
    element.innerHTML = "";
    let i = 0;

    function addNextChar() {
      if (i < chars.length) {
        element.innerHTML += chars[i] === "\n" ? "<br>" : chars[i];
        i++;
        setTimeout(addNextChar, 10 + Math.random() * 30); // Faster typing effect
      }
    }

    addNextChar();
  }

  function displaySynopsis(content, distribution, language) {
    console.log(content, distribution, language);
    const synopsis = synopsisData[content][distribution][language];
    $synopsisDisplay
      .html(
        `
      <h1>${content.replace(/-/g, " ")} synopsis for <strong> ${
          distribution === "itv"
            ? distribution.toUpperCase()
            : distribution.charAt(0).toUpperCase() + distribution.slice(1)
        }</strong></h1>
      <h3>${language.charAt(0).toUpperCase() + language.slice(1)}</h3>
      <p id="synopsis-text"></p>
    `
      )
      .fadeIn();

    const synopsisTextElement = document.getElementById("synopsis-text");
    typeTextEffect(synopsisTextElement, synopsis);

    $gallerySection.hide();
    $imagePreview.hide();
  }
  /**
   * ===================================================================
   * SYNOPSIS LOGIC END
   * ===================================================================
   */

  // Loader functions
  function showLoader() {
    $loader.show();
    $gallerySection.hide();
    $synopsisDisplay.hide();
    $imagePreview.hide();
  }

  function hideLoader() {
    $loader.hide();
  }
});
