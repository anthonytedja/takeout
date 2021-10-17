from tkinter import Tk, Button, Frame
from tkinter import font as tkFont
from random import randrange

class GUI(Frame):
    
    def __init__(self, master):
        Frame.__init__(self, master)
        type = tkFont.Font(family='Monospace', size=25, weight=tkFont.BOLD)
        self.button = Button(
            master, text="Click to Generate Restaurants", 
            command=self.click, height = 20, width = 60, font=type)
        self.button.pack()

    def click(self):

        snack = ['Manna Corn Dogs', 'Smokes Poutinerie', 'Murphys Ice Cream',
        'I <3 Boba', 'Real Fruit', 'Gong Cha', 'Starbucks', 'Tims', 'McDonalds',
        'Sugar Marmalade', 'Supermoon', 'Cocos', 'Baskin Robbins', 'Chatime',
        'Hazukido', 'Juicy Dumplings', '']
        fastfood = ['McDonalds', 'Philthy Phillys', 'Manousha', 'H Mart',
        'Nations Kitchen', 'Burger Factory', 'Alf Hana', 'Ricks Good Eats',
        'Ice Q', 'Little Caesars', 'Chipotle', 'Wendys', 'Five Guys', 'KFC',
        'Taco Bell', 'Costco', 'IKEA', 'Pizza Nova', 'Popeyes', 'Loblaws',
        'Fortune Dragon', 'Pizza Pizza', 'Panagio Breakfast', 'Dominoes',
        'Bourbon St Grill', 'Firehouse Subs', 'Dixie Food Court', 'Cora',
        'Jimmy The Greek', 'Harveys', 'Subway', 'Mary Browns', 'Sushi Park',
        'Mississauga Marketplace F&C', 'Davs HotSpot', 'La Carnita',
        'Birria Catrina']
        restaurant = ['Mihito Poke Bowls', 'Poke Guys', 'Jinzakaya', 'Pho',
        'Younge St Warehouse', 'Kelseys', 'ManDooHyang', 'K Pocha', 'Sikgaek',
        'Bubble Republic', 'Katsuya', 'Nandos', 'Song Cook', 'Kamen Ramen',
        'Kinton Ramen', 'Social Eatery', 'Owl of Minerva', 'Chucks Roadhouse',
        '168 Sushi', 'Goodfellas', 'El Mariachi', 'Swiss Chalet', 'Iron Chef',
        'Turtle Jacks', 'Wind Sushi', 'Heart Sushi', 'Buk Chang Dong',
        'Chicken in the Kitchen']

        all = ("Snack: " + snack[randrange(len(snack))] +
        "\nFast Food: " + fastfood[randrange(len(fastfood))] +
        "\nRestaurant: " + restaurant[randrange(len(restaurant))])

        self.button.configure(text=all)

root = Tk()

windowWidth = root.winfo_reqwidth()
windowHeight = root.winfo_reqheight()
 
positionRight = int(root.winfo_screenwidth()/4 - windowWidth/10)
positionDown = int(root.winfo_screenheight()/4 - windowHeight/4)
 
root.geometry("+{}+{}".format(positionRight, positionDown))

app = GUI(root)
app.master.title("Random Food Generator")
app.mainloop()
root.destroy()