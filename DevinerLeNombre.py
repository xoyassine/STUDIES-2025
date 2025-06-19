# Jeu Deviner le Nombre

import random

# Affiche le message de bienvenue
print("🎮 Bienvenue dans le jeu : Devinez le nombre !")
print("Je pense à un nombre entre 1 et 100, à toi de le deviner !")
print("Tu as 10 essais pour trouver le nombre.")

jouer = 'o'  # Variable pour contrôler la boucle de jeu
while jouer == 'o':
    
    # Génère un nombre aléatoire entre 1 et 100
    nombre_secret = random.randint(1, 100)
    essais = 0
    trouve = False
    proposition = None 

#Boucle jusqu'à ce que l'utilisateur trouve
    while not trouve and essais < 10:
        devine = int(input("👉 Entrez votre proposition : "))
        essais += 1

        if devine < nombre_secret:
            print("📉 Trop petit !")
        elif devine > nombre_secret:
            print("📈 Trop grand !")
        else:
            print(f"🎉 Bravo ! Tu as trouvé le nombre {nombre_secret} en {essais} essai(s) !")
            trouve = True

        # Si l'utilisateur n'a pas trouvé le nombre après 10 essais
        if essais >= 10 and not trouve:
            print(f"Tu as épuisé tes essais. Le nombre était {nombre_secret}.")

    print("Voulez-vous rejouer ? (o/n)")
    jouer = input("Enter 'o' pour oui ou 'n' pour non : ").strip().lower()
