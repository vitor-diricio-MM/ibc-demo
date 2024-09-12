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
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
      ],
    },
    LOL_102: {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
      ],
    },
    LOL_103: {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
      ],
    },
    LOL_104: {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
      ],
    },
    LOL_105: {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
      ],
    },
    LOL_106: {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
      ],
    },
  };

  const synopsisData = {
    LOL_101: {
      english:
        "Last One Laughing Ireland is a hilarious new comedy competition show where ten of Ireland's top comedians are locked in a room for six hours with one goal: make each other laugh while trying not to laugh themselves. Hosted by Graham Norton, the contestants face the challenge of suppressing their natural Irish instinct to laugh as they employ various tactics to crack their opponents. From outrageous characters and props to witty wordplay and physical comedy, the comedians pull out all the stops to be the last one laughing. With €50,000 for charity on the line, tensions run high as yellow and red cards are issued for even the slightest smirk or giggle. Filled with awkward moments, clever quips, and laugh-out-loud antics, this unique show puts Ireland's comedy talent to the ultimate test of willpower and comedic skill.",
      spanish:
        "Last One Laughing Ireland es un nuevo y divertido programa de competencia de comedia donde diez de los mejores comediantes de Irlanda están encerrados en una habitación durante seis horas con un objetivo: hacer reír a los demás mientras intentan no reírse ellos mismos. Presentado por Graham Norton, los concursantes se enfrentan al desafío de suprimir su instinto natural irlandés de reír mientras emplean varias tácticas para hacer quebrar a sus oponentes. Desde personajes y accesorios extravagantes hasta juegos de palabras ingeniosos y comedia física, los comediantes hacen todo lo posible para ser el último en reír. Con €50,000 para caridad en juego, las tensiones aumentan a medida que se emiten tarjetas amarillas y rojas por la más mínima sonrisa o risita. Lleno de momentos incómodos, comentarios inteligentes y situaciones desternillantes, este programa único pone a prueba el talento cómico de Irlanda en cuanto a fuerza de voluntad y habilidad cómica.",
      german:
        "Last One Laughing Ireland ist eine neue, urkomische Comedy-Wettbewerbsshow, bei der zehn der besten irischen Komiker für sechs Stunden in einem Raum eingesperrt werden mit einem Ziel: die anderen zum Lachen zu bringen, während sie selbst versuchen, nicht zu lachen. Moderiert von Graham Norton, stehen die Teilnehmer vor der Herausforderung, ihren natürlichen irischen Lachinstinkt zu unterdrücken, während sie verschiedene Taktiken anwenden, um ihre Gegner zum Lachen zu bringen. Von skurrilen Charakteren und Requisiten bis hin zu geistreichen Wortspielen und körperlicher Komik setzen die Komiker alles daran, der Letzte zu sein, der lacht. Mit 50.000 € für wohltätige Zwecke auf dem Spiel steigt die Spannung, wenn gelbe und rote Karten für das kleinste Schmunzeln oder Kichern verteilt werden. Gefüllt mit peinlichen Momenten, cleveren Sprüchen und zum Totlachen komischen Situationen, stellt diese einzigartige Show Irlands Comedy-Talent auf die ultimative Probe in Sachen Willenskraft und komödiantisches Können.",
      italian:
        "Last One Laughing Ireland è un nuovo esilarante show di competizione comica in cui dieci dei migliori comici irlandesi sono chiusi in una stanza per sei ore con un solo obiettivo: far ridere gli altri cercando di non ridere loro stessi. Condotto da Graham Norton, i concorrenti affrontano la sfida di sopprimere il loro naturale istinto irlandese di ridere mentre impiegano varie tattiche per far crollare i loro avversari. Da personaggi e oggetti di scena oltraggiosi a giochi di parole arguti e comicità fisica, i comici fanno di tutto per essere l'ultimo a ridere. Con 50.000 € in palio per beneficenza, le tensioni salgono mentre vengono emessi cartellini gialli e rossi per il minimo sorriso o risatina. Pieno di momenti imbarazzanti, battute intelligenti e situazioni esilaranti, questo show unico mette alla prova il talento comico irlandese in termini di forza di volontà e abilità comica.",
      french:
        "Last One Laughing Ireland est une nouvelle émission de compétition comique hilarante où dix des meilleurs comédiens irlandais sont enfermés dans une pièce pendant six heures avec un seul objectif : faire rire les autres tout en essayant de ne pas rire eux-mêmes. Animée par Graham Norton, les concurrents font face au défi de supprimer leur instinct naturel irlandais de rire tout en employant diverses tactiques pour faire craquer leurs adversaires. Des personnages et accessoires extravagants aux jeux de mots spirituels en passant par la comédie physique, les comédiens font tout leur possible pour être le dernier à rire. Avec 50 000 € pour une œuvre caritative en jeu, les tensions montent à mesure que des cartons jaunes et rouges sont distribués pour le moindre sourire ou gloussement. Remplie de moments gênants, de répliques intelligentes et de situations hilarantes, cette émission unique met à l'épreuve le talent comique irlandais en termes de volonté et de compétences comiques.",
    },
    LOL_102: {
      english:
        "In this hilarious and chaotic TV show, a group of comedians participate in a challenge where they must avoid laughing at all costs. The contestants face increasingly absurd and outrageous situations, including surprise appearances from beloved childhood TV characters and a surreal performance by singer Chris de Burgh. Throughout the show, participants receive yellow and red cards for laughing, adding to the tension. The challenges range from telling jokes and performing skits to enduring awkward tarot card readings and impromptu musical performances. The show's unpredictable nature and the contestants' desperate attempts to maintain composure create a uniquely entertaining and often cringe-worthy viewing experience.",
      spanish:
        "En este divertido y caótico programa de televisión, un grupo de comediantes participa en un desafío donde deben evitar reírse a toda costa. Los concursantes se enfrentan a situaciones cada vez más absurdas y escandalosas, incluyendo apariciones sorpresa de queridos personajes de la televisión infantil y una actuación surrealista del cantante Chris de Burgh. A lo largo del programa, los participantes reciben tarjetas amarillas y rojas por reírse, aumentando la tensión. Los desafíos van desde contar chistes y realizar sketches hasta soportar incómodas lecturas de cartas del tarot y actuaciones musicales improvisadas. La naturaleza impredecible del programa y los desesperados intentos de los concursantes por mantener la compostura crean una experiencia de visualización única y a menudo vergonzosa.",
      german:
        "In dieser urkomischen und chaotischen TV-Show nimmt eine Gruppe von Komikern an einer Herausforderung teil, bei der sie um jeden Preis nicht lachen dürfen. Die Teilnehmer werden mit zunehmend absurden und ungeheuerlichen Situationen konfrontiert, darunter überraschende Auftritte beliebter Kinderfernseh-Charaktere und eine surreale Performance des Sängers Chris de Burgh. Während der Show erhalten die Teilnehmer gelbe und rote Karten fürs Lachen, was die Spannung erhöht. Die Herausforderungen reichen von Witze erzählen und Sketche aufführen bis hin zu peinlichen Tarot-Kartenlesungen und spontanen musikalischen Darbietungen. Die Unberechenbarkeit der Show und die verzweifelten Versuche der Teilnehmer, die Fassung zu bewahren, schaffen ein einzigartig unterhaltsames und oft peinlich berührendes Seherlebnis.",
      italian:
        "In questo esilarante e caotico programma televisivo, un gruppo di comici partecipa a una sfida in cui devono evitare di ridere a tutti i costi. I concorrenti affrontano situazioni sempre più assurde e oltraggiose, tra cui apparizioni a sorpresa di amati personaggi della TV per bambini e un'esibizione surreale del cantante Chris de Burgh. Durante lo spettacolo, i partecipanti ricevono cartellini gialli e rossi per aver riso, aumentando la tensione. Le sfide vanno dal raccontare barzellette e recitare sketch a sopportare imbarazzanti letture di tarocchi e performance musicali improvvisate. La natura imprevedibile dello spettacolo e i disperati tentativi dei concorrenti di mantenere la compostezza creano un'esperienza di visione unica e spesso imbarazzante.",
      french:
        "Dans cette émission de télévision hilarante et chaotique, un groupe de comédiens participe à un défi où ils doivent éviter de rire à tout prix. Les concurrents font face à des situations de plus en plus absurdes et scandaleuses, y compris des apparitions surprises de personnages bien-aimés de la télévision pour enfants et une performance surréaliste du chanteur Chris de Burgh. Tout au long de l'émission, les participants reçoivent des cartons jaunes et rouges pour avoir ri, augmentant la tension. Les défis vont de raconter des blagues et jouer des sketches à endurer des lectures de tarot gênantes et des performances musicales improvisées. La nature imprévisible de l'émission et les tentatives désespérées des concurrents pour garder leur sang-froid créent une expérience de visionnage unique et souvent embarrassante.",
    },
    LOL_103: {
      english:
        "In this hilarious TV show, contestants engage in a unique challenge where they must avoid laughing or smiling at all costs. The episode features a series of outrageous and unexpected events, including a fake medical emergency with a clown, a risqué performance by 'Sexy Cat', and a surprise appearance by iconic news anchor Anne Doyle. Contestants face elimination through yellow and red cards as they struggle to maintain their composure. The show's unpredictable nature keeps both participants and viewers on edge, with absurd props, silly jokes, and celebrity cameos pushing the limits of the contestants' self-control. As the competition progresses, the tension builds, leading to dramatic eliminations and increasingly desperate attempts to provoke laughter.",
      spanish:
        "En este divertidísimo programa de televisión, los concursantes se enfrentan a un desafío único en el que deben evitar reírse o sonreír a toda costa. El episodio presenta una serie de eventos escandalosos e inesperados, incluyendo una falsa emergencia médica con un payaso, una actuación atrevida de 'Gato Sexy', y una aparición sorpresa de la icónica presentadora de noticias Anne Doyle. Los concursantes se enfrentan a la eliminación mediante tarjetas amarillas y rojas mientras luchan por mantener la compostura. La naturaleza impredecible del programa mantiene en vilo tanto a los participantes como a los espectadores, con accesorios absurdos, bromas tontas y cameos de celebridades que ponen a prueba el autocontrol de los concursantes. A medida que avanza la competencia, la tensión aumenta, lo que lleva a eliminaciones dramáticas e intentos cada vez más desesperados de provocar la risa.",
      german:
        "In dieser urkomischen TV-Show stellen sich die Teilnehmer einer einzigartigen Herausforderung, bei der sie um jeden Preis nicht lachen oder lächeln dürfen. Die Episode bietet eine Reihe von unerhörten und unerwarteten Ereignissen, darunter einen falschen medizinischen Notfall mit einem Clown, eine gewagte Darbietung von 'Sexy Cat' und einen überraschenden Auftritt der ikonischen Nachrichtensprecherin Anne Doyle. Die Teilnehmer riskieren durch gelbe und rote Karten das Ausscheiden, während sie versuchen, die Fassung zu bewahren. Die Unberechenbarkeit der Show hält sowohl die Teilnehmer als auch die Zuschauer in Atem, wobei absurde Requisiten, alberne Witze und Promi-Cameos die Grenzen der Selbstbeherrschung der Teilnehmer auf die Probe stellen. Mit fortschreitendem Wettbewerb steigt die Spannung, was zu dramatischen Ausscheidungen und zunehmend verzweifelten Versuchen führt, Lachen zu provozieren.",
      italian:
        "In questo esilarante programma televisivo, i concorrenti affrontano una sfida unica in cui devono evitare a tutti i costi di ridere o sorridere. L'episodio presenta una serie di eventi oltraggiosi e inaspettati, tra cui una finta emergenza medica con un clown, un'esibizione provocante di 'Gatto Sexy' e un'apparizione a sorpresa dell'iconica conduttrice del telegiornale Anne Doyle. I concorrenti rischiano l'eliminazione attraverso cartellini gialli e rossi mentre lottano per mantenere la compostezza. La natura imprevedibile dello spettacolo tiene col fiato sospeso sia i partecipanti che gli spettatori, con oggetti di scena assurdi, battute sciocche e cameo di celebrità che mettono alla prova l'autocontrollo dei concorrenti. Con il progredire della competizione, la tensione aumenta, portando a eliminazioni drammatiche e tentativi sempre più disperati di provocare risate.",
      french:
        "Dans cette émission télévisée hilarante, les participants relèvent un défi unique où ils doivent à tout prix éviter de rire ou de sourire. L'épisode présente une série d'événements scandaleux et inattendus, notamment une fausse urgence médicale avec un clown, une performance osée de 'Chat Sexy', et une apparition surprise de l'emblématique présentatrice de journal Anne Doyle. Les concurrents risquent l'élimination par des cartons jaunes et rouges tout en luttant pour garder leur sérieux. La nature imprévisible de l'émission tient en haleine tant les participants que les téléspectateurs, avec des accessoires absurdes, des blagues idiotes et des apparitions de célébrités qui poussent les limites du self-control des concurrents. Au fur et à mesure que la compétition progresse, la tension monte, conduisant à des éliminations dramatiques et des tentatives de plus en plus désespérées pour provoquer le rire.",
    },
    LOL_104: {
      english:
        "In this hilarious TV show, a group of comedians participate in a challenge to avoid laughing while facing increasingly absurd and comical situations. The contestants, including Jason Byrne, Amy Huberman, and Catherine Tate, engage in outrageous performances, from improvised characters like 'Edward Mannequin Hands' to Amy's committed mermaid act. The show features unexpected props, witty banter, and even a surprise appearance by Graham Norton guiding Catherine through an earpiece. As the comedians try to make each other crack, they face yellow and red cards for laughing, with eliminations adding to the tension. The mix of stand-up comedy, improvisation, and bizarre scenarios creates a uniquely entertaining and unpredictable viewing experience.",
      spanish:
        "En este divertidísimo programa de televisión, un grupo de comediantes participa en un desafío para evitar reírse mientras se enfrentan a situaciones cada vez más absurdas y cómicas. Los concursantes, incluyendo a Jason Byrne, Amy Huberman y Catherine Tate, se involucran en actuaciones extravagantes, desde personajes improvisados como 'Edward Manos de Maniquí' hasta la comprometida actuación de sirena de Amy. El programa presenta accesorios inesperados, intercambios ingeniosos e incluso una aparición sorpresa de Graham Norton guiando a Catherine a través de un auricular. Mientras los comediantes intentan hacer reír a los demás, se enfrentan a tarjetas amarillas y rojas por reírse, con eliminaciones que aumentan la tensión. La mezcla de comedia stand-up, improvisación y escenarios bizarros crea una experiencia de visualización única y entretenida.",
      german:
        "In dieser urkomischen TV-Show nimmt eine Gruppe von Komikern an einer Herausforderung teil, bei der sie nicht lachen dürfen, während sie mit zunehmend absurden und komischen Situationen konfrontiert werden. Die Teilnehmer, darunter Jason Byrne, Amy Huberman und Catherine Tate, engagieren sich in übertriebenen Darbietungen, von improvisierten Charakteren wie 'Edward Schaufensterpuppen-Hände' bis hin zu Amys engagierter Meerjungfrauen-Darstellung. Die Show bietet unerwartete Requisiten, geistreiche Wortgefechte und sogar einen überraschenden Auftritt von Graham Norton, der Catherine über einen Knopf im Ohr anleitet. Während die Komiker versuchen, sich gegenseitig zum Lachen zu bringen, erhalten sie gelbe und rote Karten fürs Lachen, wobei Ausscheidungen die Spannung erhöhen. Die Mischung aus Stand-up-Comedy, Improvisation und bizarren Szenarien schafft ein einzigartig unterhaltsames und unvorhersehbares Seherlebnis.",
      italian:
        "In questo esilarante programma televisivo, un gruppo di comici partecipa a una sfida per evitare di ridere mentre affronta situazioni sempre più assurde e comiche. I concorrenti, tra cui Jason Byrne, Amy Huberman e Catherine Tate, si impegnano in performance stravaganti, da personaggi improvvisati come 'Edward Mani di Manichino' alla convincente interpretazione di sirena di Amy. Lo show presenta oggetti di scena inaspettati, battute argute e persino un'apparizione a sorpresa di Graham Norton che guida Catherine attraverso un auricolare. Mentre i comici cercano di far ridere gli altri, affrontano cartellini gialli e rossi per le risate, con eliminazioni che aumentano la tensione. Il mix di stand-up comedy, improvvisazione e scenari bizzarri crea un'esperienza di visione unica e imprevedibilmente divertente.",
      french:
        "Dans cette émission télévisée hilarante, un groupe de comédiens participe à un défi consistant à éviter de rire face à des situations de plus en plus absurdes et comiques. Les participants, dont Jason Byrne, Amy Huberman et Catherine Tate, s'engagent dans des performances extravagantes, allant de personnages improvisés comme 'Edward Mains de Mannequin' à l'interprétation engagée de sirène d'Amy. L'émission présente des accessoires inattendus, des échanges spirituels et même une apparition surprise de Graham Norton guidant Catherine via une oreillette. Alors que les comédiens essaient de faire craquer les autres, ils font face à des cartons jaunes et rouges pour avoir ri, les éliminations ajoutant à la tension. Le mélange de stand-up, d'improvisation et de scénarios bizarres crée une expérience de visionnage unique et divertissante.",
    },
    LOL_105: {
      english:
        "In this hilarious and chaotic TV show, a group of comedians are locked in a room together, trying to make each other laugh while avoiding laughing themselves. The contestants engage in increasingly absurd antics, from talking donkeys to fake boobs, as they attempt to outlast one another. Highlights include Amy Huberman's provocative boob antics, Martin's disastrous double bass performance, and David's descent into makeup-wearing madness. The show takes unexpected turns with the arrival of Jedward in a food platter and culminates in a twerking class. Throughout, the comedians push boundaries and test each other's resolve in a battle of wits and willpower, creating a riotous and unpredictable viewing experience.",
      spanish:
        "En este divertido y caótico programa de televisión, un grupo de comediantes están encerrados en una habitación juntos, tratando de hacerse reír mutuamente mientras evitan reírse ellos mismos. Los concursantes participan en payasadas cada vez más absurdas, desde burros parlantes hasta senos falsos, mientras intentan durar más que los demás. Los momentos destacados incluyen las provocativas travesuras de Amy Huberman con los senos, la desastrosa actuación de Martin con el contrabajo y el descenso de David a la locura maquillándose. El programa da giros inesperados con la llegada de Jedward en una bandeja de comida y culmina en una clase de twerking. A lo largo del show, los comediantes empujan los límites y ponen a prueba la determinación de los demás en una batalla de ingenio y fuerza de voluntad, creando una experiencia de visualización tumultuosa e impredecible.",
      german:
        "In dieser urkomischen und chaotischen TV-Show wird eine Gruppe von Komikern zusammen in einen Raum gesperrt und versucht, sich gegenseitig zum Lachen zu bringen, während sie selbst nicht lachen dürfen. Die Teilnehmer engagieren sich in zunehmend absurden Aktionen, von sprechenden Eseln bis hin zu falschen Brüsten, während sie versuchen, länger durchzuhalten als die anderen. Zu den Höhepunkten gehören Amy Hubermans provokante Brüste-Aktionen, Martins katastrophaler Kontrabass-Auftritt und Davids Abstieg in den Make-up-Wahnsinn. Die Show nimmt unerwartete Wendungen mit der Ankunft von Jedward auf einer Speiseplatte und gipfelt in einer Twerk-Klasse. Die Komiker testen durchgehend die Grenzen und die Entschlossenheit der anderen in einem Kampf des Witzes und der Willenskraft und schaffen so ein ausgelassenes und unberechenbares Seherlebnis.",
      italian:
        "In questo esilarante e caotico programma televisivo, un gruppo di comici viene chiuso in una stanza insieme, cercando di farsi ridere a vicenda evitando di ridere loro stessi. I concorrenti si impegnano in trovate sempre più assurde, da asini parlanti a seni finti, mentre cercano di resistere più a lungo degli altri. Tra i momenti salienti ci sono le provocatorie buffonate di Amy Huberman con il seno, l'esibizione disastrosa di Martin con il contrabbasso e la discesa di David nella follia del trucco. Lo spettacolo prende svolte inaspettate con l'arrivo di Jedward su un vassoio di cibo e culmina in una lezione di twerking. Durante tutto lo show, i comici spingono i limiti e mettono alla prova la determinazione degli altri in una battaglia di arguzia e forza di volontà, creando un'esperienza di visione tumultuosa e imprevedibile.",
      french:
        "Dans cette émission de télévision hilarante et chaotique, un groupe de comédiens est enfermé ensemble dans une pièce, essayant de se faire rire mutuellement tout en évitant de rire eux-mêmes. Les concurrents se livrent à des pitreries de plus en plus absurdes, allant des ânes parlants aux faux seins, tout en essayant de tenir plus longtemps que les autres. Parmi les moments forts, on trouve les provocations d'Amy Huberman avec ses seins, la performance désastreuse de Martin à la contrebasse et la descente de David dans la folie du maquillage. L'émission prend des tournures inattendues avec l'arrivée de Jedward sur un plateau de nourriture et culmine avec un cours de twerk. Tout au long de l'émission, les comédiens repoussent les limites et testent la détermination des autres dans une bataille d'esprit et de volonté, créant une expérience de visionnage tumultueuse et imprévisible.",
    },
    LOL_106: {
      english:
        "Last One Laughing Ireland is a comedy competition show where ten of Ireland's top comedians face off in a battle of wits and willpower. Confined to a room for six hours, they must try to make each other laugh while keeping a straight face themselves. The last comedian to maintain their composure wins €50,000 for their chosen charity. Throughout the show, contestants employ various tactics, from physical comedy to witty banter, to provoke laughter. As the competition progresses, comedians are eliminated until only two remain for the final showdown. The show culminates in an intense staring contest between the finalists, with puppet commentators adding to the pressure. In a nail-biting finish, Jason Byrne emerges victorious, narrowly beating Deirdre O'Kane to claim the title of Last One Laughing Ireland.",
      spanish:
        "Last One Laughing Ireland es un concurso de comedia donde diez de los mejores cómicos de Irlanda se enfrentan en una batalla de ingenio y fuerza de voluntad. Confinados en una habitación durante seis horas, deben intentar hacer reír a los demás mientras mantienen la cara seria. El último cómico en mantener la compostura gana €50,000 para su organización benéfica elegida. A lo largo del programa, los concursantes emplean varias tácticas, desde comedia física hasta intercambios ingeniosos, para provocar la risa. A medida que avanza la competencia, los cómicos son eliminados hasta que solo quedan dos para el enfrentamiento final. El programa culmina en un intenso concurso de miradas entre los finalistas, con comentaristas de marionetas aumentando la presión. En un final de infarto, Jason Byrne emerge victorioso, venciendo por poco a Deirdre O'Kane para reclamar el título de Last One Laughing Ireland.",
      german:
        "Last One Laughing Ireland ist eine Comedy-Wettbewerbsshow, bei der zehn der besten Komiker Irlands in einem Kampf des Witzes und der Willenskraft gegeneinander antreten. Sechs Stunden lang in einem Raum eingesperrt, müssen sie versuchen, sich gegenseitig zum Lachen zu bringen, während sie selbst ernst bleiben. Der letzte Komiker, der die Fassung bewahrt, gewinnt 50.000 € für eine Wohltätigkeitsorganisation seiner Wahl. Im Laufe der Show wenden die Teilnehmer verschiedene Taktiken an, von körperlicher Komik bis hin zu geistreichen Wortgefechten, um Lachen zu provozieren. Im Verlauf des Wettbewerbs werden Komiker eliminiert, bis nur noch zwei für das Finale übrig bleiben. Die Show gipfelt in einem intensiven Starrwettbewerb zwischen den Finalisten, wobei Puppenkommentatoren den Druck noch erhöhen. In einem nervenaufreibenden Finale geht Jason Byrne als Sieger hervor und schlägt Deirdre O'Kane knapp, um den Titel Last One Laughing Ireland zu gewinnen.",
      italian:
        "Last One Laughing Ireland è uno show di competizione comica in cui dieci dei migliori comici irlandesi si sfidano in una battaglia di arguzia e forza di volontà. Confinati in una stanza per sei ore, devono cercare di far ridere gli altri mantenendo allo stesso tempo un'espressione seria. L'ultimo comico a mantenere la compostezza vince €50.000 per l'ente di beneficenza scelto. Durante lo show, i concorrenti impiegano varie tattiche, dalla comicità fisica alle battute argute, per provocare risate. Man mano che la competizione avanza, i comici vengono eliminati fino a quando ne rimangono solo due per lo scontro finale. Lo show culmina in un'intensa gara di sguardi tra i finalisti, con commentatori pupazzi che aumentano la pressione. In un finale al cardiopalma, Jason Byrne emerge vittorioso, battendo di poco Deirdre O'Kane per aggiudicarsi il titolo di Last One Laughing Ireland.",
      french:
        "Last One Laughing Ireland est une émission de compétition comique où dix des meilleurs comédiens irlandais s'affrontent dans une bataille d'esprit et de volonté. Confinés dans une pièce pendant six heures, ils doivent essayer de faire rire les autres tout en gardant leur sérieux. Le dernier comédien à garder son sang-froid gagne 50 000 € pour l'association caritative de son choix. Tout au long de l'émission, les concurrents emploient diverses tactiques, de la comédie physique aux échanges spirituels, pour provoquer le rire. Au fur et à mesure que la compétition progresse, les comédiens sont éliminés jusqu'à ce qu'il n'en reste que deux pour la confrontation finale. L'émission culmine avec un concours de regards intenses entre les finalistes, avec des commentateurs marionnettes qui ajoutent à la pression. Dans un final à couper le souffle, Jason Byrne émerge victorieux, battant de justesse Deirdre O'Kane pour remporter le titre de Last One Laughing Ireland.",
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
      const randomImageNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      $videoPreview.html(`<video controls poster="possible_assets/${selectedFile.replace(
        ".mp4",
        ""
      )}/amazon/image${randomImageNumber}.jpg">
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
      $distributionRow.fadeIn();
    } else if (selectedType === "Synopsis") {
      $synopsisLanguageRow.fadeIn();
      $gallerySection.hide();
      $imagePreview.hide();
      $distributionRow.fadeOut();
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
    const images = imageData[contentKey].images;

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
      const language = $(this).val().toLowerCase();
      if (content && language) {
        showLoader();
        setTimeout(() => {
          displaySynopsis(content, language);
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
        setTimeout(addNextChar, 1 + Math.random() * 6); // Faster typing effect
      }
    }

    addNextChar();
  }

  function displaySynopsis(content, language) {
    const synopsis = synopsisData[content][language];
    $synopsisDisplay
      .html(
        `
    <h1>${content.replace(/-/g, " ")} synopsis</h1>
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
