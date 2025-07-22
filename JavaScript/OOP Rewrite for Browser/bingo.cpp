#include <iostream>
#include <ctime>
#include <cstdlib>
#include <iomanip>
#include <string>

using namespace std;

int main()
{

  srand(time(0));

  int arr[5][5] = {};
  string comb[3] = {};
  char game = 'G';
  bool new_board = 0;
  int b_int, k_int;
  string b, k;

  while (new_board == 0) {
    cout << "Would you like to begin a game of bingo?\nType 'B' to generate a board.\nType 'X' to cancel the game.\n";
    cin >> game;

    if (game == 'X') return 0;

    else if (game == 'B') {
      for (int i = 0; i < 5; i++)
      {
        for (int j = 0; j < 5; j++)
        {
          arr[i][j] = (rand() % 99) + 1;
        }
      }
      cout << setw(3) << "B" << setw(3) << "I" << setw(3) << "N" << setw(3) << "G" << setw(3) << "O" << endl;
      for (int i = 0; i < 5; i++)
      {
        for (int j = 0; j < 5; j++)
        {
          cout << setw(3) << arr[i][j];
        }
        cout << endl;
      }
      new_board = 1;
    }

    else {
      cout << "Invalid command please try again.\n\n";
    }
  }

  while (game == 'B')
  {
    cout << "Would you like a Bingo combination?\nIf yes, type 'N': ";
    cin >> game;

    while (game != 'Q')
    {
      if (game == 'N')
      {
        b_int = (rand() % 5) + 1;
        if(b_int==1) {
          b = 'B';
          comb[0] = b;
        }
        else if(b_int == 2){
          b = 'I';
          comb[0] = b;
        }
        else if(b_int == 3){
          b = 'N';
          comb[0] = b;
        }
        else if(b_int == 4){
          b = 'G';
          comb[0] = b;
        }
        else if(b_int == 5){
          b = 'O';
          comb[0] = b;
        }

        // b = to_string(b_int);
        // comb[0] = b;

        comb[1] = " ";

        k_int = (rand() % 99) + 1;
        k = to_string(k_int);
        comb[2] = k;

        for (unsigned int i{0}; i < 3; i++)
        {
            cout << setw(2) << comb[i];
        }
        cout << "\nIf you would like a new combination, type 'N'.\nIf a player has a Bingo, type 'Y'.\nIf you want to stop playing type 'X'.\n";
        cin >> game;
        if(game == 'Y') {
          break;
        }
        else if (game == 'X') {
          break;
        }
      }
      else
      {
        cout << "Please enter a valid command.\n\nType 'X' to end the game.\nType 'N' for a new number.\nType 'Y' if someone has achieved Bingo.\n";
        cin >> game;
      }
    }
  }

  if (game == 'Y') cout << "Bingo! #1 Victory Royale\n";
  else if (game == 'X') cout << "Bingo game cancelled by User\n";

  return 0;
}