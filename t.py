import keyboard, time

def main():
 fil = open("C:/Users/Philippe/Desktop/mapaOuvidorias/o.txt", "r", errors="ignore", encoding="utf-8")
 s = fil.read()
 fil.close()
 f = open("C:/Users/Philippe/Desktop/mapaOuvidorias/o.txt", "w")
 f.close()
 s.replace("\n", " ")
 time.sleep(5)
 jumps = []
 i = 0
 while i < len(s):
  i += 60
  try:
   while s[i] != " ":
    i += 1
   jumps.append(i)
  except:
   break
  i += 1
 for j in range(0, len(s)):
  keyboard.write(s[j])
  try:
   jumps.index(j)
   keyboard.press("enter")
  except:
   pass

main()