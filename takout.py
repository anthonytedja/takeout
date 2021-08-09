from tkinter import Tk, Button, Frame
from tkinter import font as tkFont
from random import randint, randrange

class GUI(Frame):
    
    def __init__(self, master):
        Frame.__init__(self, master)
        type = tkFont.Font(family='Monospace', size=25, weight=tkFont.BOLD)
        self.button = Button(
            master, text="Click to Generate Restaurants", 
    command=self.click, height = 20, width = 60, font=type)
        self.button.pack()

    def click(self):
        small = ['']
        medium = ['']
        large = ['']
        all = "Snack: " + small[randrange(len(small))] + "\nFast Food: " + medium[randrange(len(medium))] + "\nRestaurant: " + large[randrange(len(large))]
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