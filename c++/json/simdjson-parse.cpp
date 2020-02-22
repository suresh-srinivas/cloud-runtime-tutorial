/*
   Derived from https://github.com/lemire/simdjson/tree/master/singleheader
   */
#include <iostream>
#include "simdjson.h"
#include "simdjson.cpp"
int main(int argc, char *argv[]) {
  if(argc < 2) {
    std::cerr << "Please specify at least one file name. " << std::endl;
  }
  const char * filename = argv[1];
  simdjson::padded_string p = simdjson::get_corpus(filename);
  simdjson::ParsedJson pj = simdjson::build_parsed_json(p); // do the parsing
  if( ! pj.is_valid() ) {
    std::cout << "build_parsed_json invalid" << std::endl;
    return EXIT_FAILURE;
  } else {
      return EXIT_SUCCESS;
  }

  return EXIT_SUCCESS;
}

