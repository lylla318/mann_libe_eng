import xml.etree.ElementTree as ET

def test():
	tree = ET.parse("formatted.xml")
	root = tree.getroot()
	#thingy = doc.find('record')

	for child in root:
		for c in child:
			print c.tag, c.attrib
		#print child.tag, child.attrib

	print root[0][1].text
	print root[0][2].text
	print root[0][3].text
	print root[0][4].text
	print root[0][5].text
	print root[0][6].text
	print root[0][7].text

if __name__ == '__main__':
	test()
    
