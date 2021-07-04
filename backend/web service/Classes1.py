import pyaudio
import wave
import pandas as pd
from nltk.tokenize import word_tokenize, sent_tokenize
import re
from nltk.corpus import stopwords
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import speech_recognition as sr


names = []
df = pd.DataFrame(names, columns=['Voice name', 'Content'])
df.to_csv('Voices names.csv')


class Model:
    def __init__(self, x):
        self.x = x
        
    def Recording(self, x):
       
    
        # the file name output you want to record into
        #filename = "recorded.wav"
        import datetime, random
        #import strip
        x= datetime.datetime.now()
        #df= pd.read_csv('Voices names.csv')
        filename = x.strftime("%S")
        filename = filename+str(random.randrange(1, 100000,2))
        filename = str(filename)+'.wav'
        #names = []
        #names.append(filename)
        #dfnew = pd.DataFrame (names, columns = ['Voice name'])
        #df2   = pd.concat([df, dfnew])
        #df2.to_csv('Voices names.csv',mode='a', header=False)

        # set the chunk size of 1024 samples
        chunk = 1024
        # sample format
        FORMAT = pyaudio.paInt16
        # mono, change to 2 if you want stereo
        channels = 1
        # 44100 samples per second
        sample_rate = 44100
        record_seconds = self.x
        # initialize PyAudio object
        p = pyaudio.PyAudio()
        # open stream object as input & output
        stream = p.open(format=FORMAT,
                        channels=channels,
                        rate=sample_rate,
                        input=True,
                        output=True,
                        frames_per_buffer=chunk)
        frames = []
        print("Recording...")
        for i in range(int(44100 / chunk * record_seconds)):
            data = stream.read(chunk)
            # if you want to hear your voice while recording
            # stream.write(data)
            frames.append(data)
        print("Finished recording.")
        # stop and close stream
        stream.stop_stream()
        stream.close()
        # terminate pyaudio object
        p.terminate()
        # save audio file
        # open the file in 'write bytes' mode
        wf = wave.open(filename, "wb")
        # set the channels
        wf.setnchannels(channels)
        # set the sample format
        wf.setsampwidth(p.get_sample_size(FORMAT))
        # set the sample rate
        wf.setframerate(sample_rate)
        # write the frames as bytes
        wf.writeframes(b"".join(frames))
        # close the file
        wf.close()
        r = sr.Recognizer()

        harvard = sr.AudioFile(filename)
        with harvard as source:
            audio = r.record(source)
        text=r.recognize_google(audio)
        filename = filename.split('.wav')
        filename = filename[0]+'.txt'
        with open(filename,'w') as f:
            f.write(text)
        print(text)
        names = []
        names.append(( filename,text ))
        dfnew = pd.DataFrame (names, columns = ['Voice name','Content'])
        df2 = pd.concat([df, dfnew])
        df2.to_csv('Voices names.csv',mode='a', header=False)
        return filename
    
    def Similarity(self, filename, comparefile):
        
        file_docs = []
        with open (comparefile) as f:
            tokens = sent_tokenize(f.read())
            for line in tokens:
                file_docs.append(line)
        file_docs
        
        text = []
        with open (filename) as f:
            tokens = sent_tokenize(f.read())
            for line in tokens:
                text.append(line)
        text

        # this function returns a list of tokenized and stemmed words of any text
        
        def get_tokenized_list(doc_text):
            doc_text = re.sub("^\d+\s|\s\d+\s|\s\d+$", " ", doc_text)
            doc_text = re.sub('[()]', '', doc_text)

            doc_text = doc_text.lower()
            tokens = nltk.word_tokenize(doc_text)
            return tokens

        # This function will performing stemming on tokenized words
        def word_stemmer(token_list):

            ps = nltk.stem.PorterStemmer()
            stemmed = []
            for words in token_list:
                stemmed.append(ps.stem(words))
            return stemmed


        # Function to remove stopwords from tokenized word list
        def remove_stopwords(doc_text):

            cleaned_text = []
            for words in doc_text:
                if words not in stop_words:
                    cleaned_text.append(words)
            return cleaned_text

        def convert_to_lower(text):
            input_str = text.lower()
            return input_str

        
        #print(stopwords.words('english'))
        stop_words = set(stopwords.words('english'))
        cleaned_corpus = []
        #text = str(text)
        for doc in [str(text)]:

            tokens = get_tokenized_list(doc)
            doc_text = remove_stopwords(tokens)
            doc_text  = word_stemmer(doc_text)
            doc_text = ' '.join(doc_text)
            cleaned_corpus.append(doc_text)
        cleaned_corpus

        cleaned_corpus2 = []
        for doc in file_docs :

            tokens = get_tokenized_list(doc)
            #print(tokens)
            doc_text = remove_stopwords(tokens)
            #print(doc_text)
            doc_text  = word_stemmer(doc_text)
            #print(doc_text)
            doc_text = ' '.join(doc_text)
            #print(doc_text)
            cleaned_corpus2.append(doc_text)
        cleaned_corpus2
        def clean_text(document):
            '''it must take a list and it will return it cleaned'''
            cleaned_corpus = []
            for doc in document:
                tokens = get_tokenized_list(doc)
                doc_text = remove_stopwords(tokens)
                doc_text  = word_stemmer(doc_text)
                doc_text = ' '.join(doc_text)
                cleaned_corpus.append(doc_text)
                print("document after cleaning: "+doc_text)

        clean_text(file_docs)
        
        clean_text(text)

        tfidf_vectorizer = TfidfVectorizer()
        vectorizer = CountVectorizer()
        #y = vectorizer.fit_transform(file_docs)
        tfidf_matrix_train = tfidf_vectorizer.fit_transform(file_docs)
        tfidf_matrix_test = tfidf_vectorizer.transform(text)
        cosine_similarity(tfidf_matrix_train,tfidf_matrix_test)

        tfidf_vectorizer = TfidfVectorizer()
        vectorizer = CountVectorizer()
        #y = vectorizer.fit_transform(file_docs)
        tfidf_matrix_train2 = tfidf_vectorizer.fit_transform(cleaned_corpus2)
        tfidf_matrix_test2 = tfidf_vectorizer.transform(cleaned_corpus)
        cosine_similarity(tfidf_matrix_train2,tfidf_matrix_test2,dense_output=True)
        sim=cosine_similarity(tfidf_matrix_train2,tfidf_matrix_test2,dense_output=True)*100
        return sim[0]