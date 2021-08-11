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
        'I <3 Boba', 'Real Fruit', 'Gong Cha', 'Starbucks', 'Tims', 'McDonalds']
        fastfood = ['McDonalds', 'Philthy Phillys', 'Manousha', 'H Mart',
        'Nations Kitchen', 'Burger Factory', 'Alf Hana', 'Ricks Good Eats',
        'Ice Q', 'Little Caesars', 'Chipotle', 'Wendys', 'Five Guys', 'KFC',
        'Taco Bell', 'Costco', 'IKEA', 'Pizza Nova', 'Popeyes', 'Loblaws',
        'Fortune Dragon', 'Pizza Pizza', 'Panagio Breakfast', 'Dennys',
        'Dominoes', 'Bourbon St Grill', 'Firehouse Subs', 'Subway',
        'Jimmy The Greek', 'Harveys', ]
        restaurant = ['Mihito Poke Bowls', 'Poke Guys', 'Jinzakaya',
        'Younge St Warehouse', 'Kelseys', 'ManDooHyang', 'K Pocha',
        'Bubble Republic', 'Katsuya', 'Nandos', 'Song Cook', 'Kamen Ramen',
        'Kinton Ramen', 'Social Eatery', 'Owl of Minerva', 'Chucks Roadhouse',
        'AYCE Sushi', 'Pho', 'Goodfellas', 'El Mariachi', 'Swiss Chalet']

        all = ("Snack: " + snack[randrange(len(snack))] +
        "\nFast Food: " + fastfood[randrange(len(fastfood))] +
        "\nRestaurant: " + restaurant[randrange(len(restaurant))])

        self.button.configure(text=all)

root = Tk()

windowWidth = root.winfo_reqwidth()
windowHeight = root.winfo_reqheight()
print("Width",windowWidth,"Height",windowHeight)
 
positionRight = int(root.winfo_screenwidth()/4 - windowWidth/10)
positionDown = int(root.winfo_screenheight()/4 - windowHeight/4)
 
root.geometry("+{}+{}".format(positionRight, positionDown))

app = GUI(root)
app.master.title("Random Food Generator")
app.mainloop()
root.destroy()