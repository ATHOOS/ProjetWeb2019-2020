Voici la marche à suivre si vous souhaitez tester ce projet directement sur votre ordinateur.

Tout d'abord il vous faudra utiliser Wamp si vous êtes sur windows, Mamp si vous êtes sur MacOs ou Lamp si vous êtes sur Linux.

Ensuite vous pouvez directement télécharger le projet. Assurez-vous de bien être dans la branche master. Cette branche est assurée de contenir un projet fonctionnel.

Placez le projet dans votre répertoire Wamp, Mamp ou Lamp. Allumez ce dernier et allez sur phpMyAdmin. Créez une nouvelle base de donnée nommée "projetweb". Allez dans l'onglet SQL et copiez/collez l'ensemble du fichier "projetweb.sql" présent dans le dossier BDD. Exécutez ensuite le script.

Pour terminer, allez dans le dossier "assets/php/dbAccess.php" et vérifiez les paramètres du PDO à la ligne 11 afin que ceux-ci coincident avec vos paramètres Wamp, Mamp ou Lamp.

Voilà, vous pouvez dorénavant retrouver notre projet en local et le modifier comme bon vous semble.
