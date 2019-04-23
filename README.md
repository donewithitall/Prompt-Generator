# Prompt-Generator

Goals:
- A prompt generator that constructes preset sentences and/or sentence fragments with blanks that get filled and then constructed into a prompt
- The ability to add and remove elements from the blank categories

Notes:
- Some categories will have other nested categories (i.e. places will include countries which is its own category)

Steps:
- Retrieve random sentence (Once there was a {creature})
- Read for the type of blank in placeholder ({creature})
- Retrive said random blank (ghost)
- Replace blank placeholder with the retrieved random blank (Once there was a ghost)
- Repeat and construct prompt with new sentences
