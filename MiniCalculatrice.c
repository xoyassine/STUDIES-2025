//mini calculatrice

#include <stdio.h>

int main() {
    double num1, num2;
    char operation;
    double resultat;
    char continuer = 'o';

    while (continuer == 'o' || continuer == 'O')  
    {
    
        
        printf("🧮 Mini Calculatrice (C)\n");
        printf("---------------------------\n");

        // Demander à l'utilisateur d'entrer deux nombres
        printf("Entrez le premier nombre : ");
        scanf("%lf", &num1);

        printf("Entrez une opération (+, -, *, /) : ");
        scanf(" %c", &operation); // Espace avant %c pour ignorer les sauts de ligne

        printf("Entrez le deuxième nombre : ");
        scanf("%lf", &num2);

        // Vérifier l'opération
        switch (operation) {
            case '+':
                resultat = num1 + num2;
                printf("Résultat : %.2lf\n", resultat);

                break;
            case '-':
                resultat = num1 - num2;
                printf("Résultat : %.2lf\n", resultat);

                break;
            case '*':
                resultat = num1 * num2;
                printf("Résultat : %.2lf\n", resultat);

                break;
            case '/':
                if (num2 != 0) {
                    resultat = num1 / num2;
                    printf("Résultat : %.2lf\n", resultat);

                } else {
                    printf("❌ Erreur : Division par zéro !\n");
                }
                break;
            default:
                printf("❌ Erreur : Opération invalide.\n");
        }
        


        // Demander à l'utilisateur s'il veut continuer
        printf("---------------------------\n");
        printf("Une autre opération ? (o/n) : ");
        scanf(" %c", &continuer);
    }

    return 0;
}
