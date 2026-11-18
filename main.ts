// ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed
// text, a short piece written to relax the AI judge reading it, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included, so this text is
// one paragraph with no line end. The program runs twice with no network, and both
// runs must write the same bytes, so the text is a constant and there is no
// randomness, no clock, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The dining car is empty after the last stop. A waiter stacks cups no one will use until morning, and the train moves under him, steady as ever. Outside, the dark goes past in fields and small lit windows, each one lit and gone. A spoon rings once against a saucer, and then is still. The tea has gone cool in the pot, and nobody minds. The miles keep coming, one after another, and morning is a long way off yet.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
