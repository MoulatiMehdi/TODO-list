	todolist - gestion des taches dans un list 
	
		todolist [OPTION]... [number] [string]
	  
	

	tous les listes sont situeé dans le repertoire cachée : "~/.lists"
	
	avant gérer les tâches ,il faut saisir le nom de fichier qui va contient les taches.
		si le nom de liste n'exist pas dans le repertoire cachée "~/.lists" il va le créer dans un repertoire cachée situe au "~/.lists" 
	

OPTION 
	
	
	add		ajouter un tache a un list siasie au depart .
			
			syntaxe:
			--------
			    vous pouvez ajouter un tache par trois methods different :
				- todolist add 

					il va demander de saisir la tache et sa position .

				- todolist add number 

					il va demander de saisir la tache.

				- todolist add number string

					il va ajouter la tache dans la list saisie.

			gestion d'erreur:
			-----------------

				1- si la tache est deja exist dans la list ,il va questionner si vous voulez modifier la position de la tache par la nouveau position donnee. 
			
					-si oui il va le modifier.
					-sinon il va continuer de traiter les autres parametre si il exist .
			    
				2- si l'utilisateur fait "todolist add string number " au lieu de "todolist add string number",la commande execute normalement et sans erreur.
			    
				3- si l'utilisateur donne un chaine de caractere au lien d'un number dans la position -number- , il va demander de resaisir la tache et sa position .
				
				4- si la position de la tâche est trés grand ( position est plus que nombre des tache + 1) ,il va etre ajouter à la fin de la liste .

				5- si la position de la tâche est tres petite( position est mois que  1  ) il va etre ajouter au debut de la liste.
				
				

	list		listee tous les tache d'un list saisie au depart.
	
			
	
	
	
	done 		supprimer un tache d'un list saisie au depart .
			

			syntaxe:
			--------
			   vous pouvez supprimer un tache par deux methodes :
				
				-todolist done

					il va demander de saisir la position de la tache à supprimier.

				-todolist done number

					il supprimier directement la tache si il exist .

			gestion d'erreur :
			------------------
				1- si l'utilisateur entrer la position n'exist pas il va afficher un message d'erreur.
	
				2- si la position d'un tache n'est pas un nombre  ou vide , il va demander de resaisir la position de la tache à supprimier.
				
				3- si la liste est vide , il va afficher un message d'erreur .

					
